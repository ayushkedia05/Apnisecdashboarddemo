
import './table.css'
import { Container ,Table,Chip,Switch} from '@mantine/core';
function App() {

  const elements = [
    {
      RunType: "Manual",
      status: "Finished",
      Start: "1:22 PM",
      end: "2:00 PM",
      exposed: 456,
      risk: "safe",
      chipcolor: "green",
    },
    {
      RunType: "Manual",
      status: "Finished",
      Start: "1:22 PM", 
      end: "2:00 PM",
      exposed: 45,
      risk: "high",
      chipcolor: "red",
    },
  
  
    {
      RunType: "Automatic",
      status: "Finished",
      Start: "11:30 AM",
      end: "11:45 AM",
      exposed: 56,
      risk: "medium",
      chipcolor: "yellow",
    },
  ];


  const rows = elements.map((element,ind) => (
    <tr key={ind}>
      <td>{element.RunType}</td>
      <td>{element.status}</td>
      {/* <td>{element.end}</td>   */}
      <td>{element.exposed}</td>
      
      {/* <td>{element.risk}</td> */}

      <td>   <Chip className="chip"
                value="chip"
                checked={false}
                styles={{
                  label: { color: element.chipcolor },
                  outline: { color: element.chipcolor },
                  filled: { color: element.chipcolor },
                  input: { color: element.chipcolor },
                  disabled: { color: element.chipcolor },
                }}
              >
                {element.risk}
              </Chip></td>
              <td><Switch></Switch></td>

    </tr>
  ));
  return (
    <div className="table">
<div></div>

<Table >
      <thead>
        <tr>
          <th>RunType</th>
          <th>status</th>
          {/* <th>Start</th> */}
          {/* <th>End</th> */}
          <th>Exposed</th>
          <th>Risk</th>
          <th>view</th>
          
          {/* <th>chipcolor</th> */}

        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
      {/* <Layout></Layout> */}
{/* <RenderRow> </RenderRow> */}
{/* <Tablecomponent>  </Tablecomponent> */}

    </div>
  );
}

export default App;
