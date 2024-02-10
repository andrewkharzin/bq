import { GetServerSideProps } from 'next';

const navbar = () => {
  return (
    <div>
      Navbar
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


  return {
    props:{

    }
  }
}

export default navbar
