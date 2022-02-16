import { Button, InputGroup, FormControl } from 'react-bootstrap';
function App() {
  return (
    <div > 
      <InputGroup className="mb-3">
        <label htmlFor='task'>
          Task:
          <FormControl
            id='task'
            placeholder="Insert your task here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </label>
        <Button variant="outline-secondary" id="button-addon2">
          Add Task!
        </Button>
      </InputGroup>
    </div>
  );
}

export default App;
