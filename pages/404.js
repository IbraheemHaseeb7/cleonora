export default function Error() {
  return (
    <div
      style={{
        marginTop: "5rem",
        width: "100%",
        height: "calc(100vh - 5rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#efcb71",
      }}
    >
      <h1>Oops...Page not found</h1>
      <h3>Error Code: 404</h3>
    </div>
  );
}
