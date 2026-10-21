const Tables = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return <p>loading.....</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((key, j) => (
              <td key={`${i}-${j}`}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;