import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="content" style={{ marginTop: 56 }}>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
