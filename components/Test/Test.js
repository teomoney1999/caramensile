import Head from "next/head";

const Test = ({ className }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>Test</title>
      </Head>
      <header>
        <div className="container">
          <div className="navbar">
            <a href="/" className="nav-branding">
              TEST
            </a>
            <ul className="nav-menu">
              <li className="nav-link"><a href="/about">About</a></li>
              <li className="nav-link"><a href="/about">Contact</a></li>
              <li className="nav-link"><a href="/about">Login</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="home">Home</div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="contact">Contact</div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="login">Login</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Test;
