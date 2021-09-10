import "./Table.scss";

function Table({ pageSize, data, onClick, loading, sortData }) {
  if (loading) {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>E-MAIL</th>
            <th>PHONE</th>
            <th>STATE</th>
          </tr>
        </thead>
        <tbody>
          {new Array(pageSize).fill(0).map((_, i) => (
            <tr key={i}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th id="id" onClick={(event) => sortData(event)}>
            ID
          </th>
          <th id="firstName" onClick={(event) => sortData(event)}>
            FIRSTNAME
          </th>
          <th id="lastName" onClick={(event) => sortData(event)}>
            LASTNAME
          </th>
          <th id="email" onClick={(event) => sortData(event)}>
            E-MAIL
          </th>
          <th id="phone" onClick={(event) => sortData(event)}>
            PHONE
          </th>
          <th id="adress.state" onClick={(event) => sortData(event)}>
            STATE
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index} onClick={() => onClick(data)}>
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.adress.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
