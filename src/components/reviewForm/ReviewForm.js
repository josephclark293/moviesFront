import {Form,Button} from 'react-bootstrap';

export const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
    
  return (
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control as="textarea" rows={3} defaultValue={defaultValue} ref={revText}></Form.Control>
        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}
