'use client'

import { Suspense } from 'react'
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/table';

export default function Shippers() {
  const [shippers, setShippers] = useState<any[] | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.from('shippers').select();
        if (error) {
          throw error;
        }
        setShippers(data);
      } catch (error) {
        console.error('Error fetching shippers:', error.message);
      }
    };
    getData();
  }, []);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'address', label: 'Address' },
    { key: 'contact_person', label: 'Contact Person' },
    { key: 'phone', label: 'Phone' }
  ];

  return (
    <div>
      <Suspense fallback={<p>Loading shippers</p>}>

      <Table aria-label="Shippers Table">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {shippers ? (
            shippers.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={`${rowIndex}-${column.key}`}>
                    {row[column.key] || 'N/A'} {/* Display 'N/A' if value is missing or null */}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={`empty-${index}`}><div className="h-5 rounded-lg bg-default-300"></div></TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
      </Suspense>
    </div>
  );
}
