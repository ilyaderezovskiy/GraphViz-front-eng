import React from "react";

const InfoPage = () => {

    let headers = ['student', 'source', 'target', 'timestamp']
    let row1 = ['Ivan I.', 'Test_1 pass', 'Test_2 fail', '19.04.2024']
    let row2 = ['Ivan I.', 'Test_2 fail', 'Test_3 pass', '19.04.2024']
    let row3 = ['Ivan I.', 'Test_3 pass', 'Test_4 pass', '21.04.2024']
    let row4 = ['Boris B.', 'Test_1 fail', 'Test_2 pass', '21.04.2024']


    return (
      <>
        {
          <>
            <p style={{ padding: "15px" }}>Example of an event log:</p>
            <table style={tableStyle}>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th style={tableHeaderStyle}>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {row1.map((row) => (
                        <td style={tableCellStyle}>
                            {row}
                        </td>
                    ))}
                </tr>
                <tr>
                    {row2.map((row) => (
                        <td style={tableCellStyle}>
                            {row}
                        </td>
                    ))}
                </tr>
                <tr>
                    {row3.map((row) => (
                        <td style={tableCellStyle}>
                            {row}
                        </td>
                    ))}
                </tr>
                <tr>
                    {row4.map((row) => (
                        <td style={tableCellStyle}>
                            {row}
                        </td>
                    ))}
                </tr>
            </tbody>
            </table>
            <p style={{ padding: "15px" }}>Important! Columns "student", "source", "target" are mandatory.
            Columns "timestamp" and others are optional.</p>
            <p style={{ padding: "15px", paddingBottom: "8px" }}>Example of a list of vertices:</p>
            <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={tableHeaderStyle}>
                        Test_1
                    </th>
                    <th style={tableHeaderStyle}>
                        Test_2
                    </th>
                    <th style={tableHeaderStyle}>
                        Test_3
                    </th>
                    <th style={tableHeaderStyle}>
                        Test_4
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={tableCellStyle}>
                        pass
                    </td>
                    <td style={tableCellStyle}>
                        fail
                    </td>
                    <td style={tableCellStyle}>
                        pass
                    </td>
                    <td style={tableCellStyle}>
                        pass
                    </td>
                </tr>
                <tr>
                    <td style={tableCellStyle}>
                        fail
                    </td>
                    <td style={tableCellStyle}>
                        pass
                    </td>
                    <td style={tableCellStyle}>
                        fail
                    </td>
                    <td style={tableCellStyle}>
                        fail
                    </td>
                </tr>
            </tbody>
            </table>
            <p style={{ padding: "15px", paddingBottom: "0px" }}>Important! The event name in the event log should consist of two parts:
            column name and vertex name in the graph</p>
            <p style={{ padding: "15px" }}>Test_1 pass (Event name) = Test_1 (Column name in the Sankey diagram) +
            pass (The name of the vertex of the corresponding column)</p>
          </>
        }
      </> 
    );
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "40px 90px 55px -20px rgba(155, 184, 243, 0.2)",
  };
  
  const tableHeaderStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: "#ffffff",
    backgroundColor: "#6D95E0",
    borderBottom: "1px solid #ddd",
    padding: "15px",
    textAlign: "left",
  };
  
  const tableCellStyle = {
    fontSize: "14px",
    fontWeight: 500,
    borderBottom: "1px solid #ddd",
    padding: "15px",
    backgroundColor: "#fff",
  };

  export default InfoPage;