import googleFormConversion from "./google-form.conversion";
import formMock from "../mooks/form";

test("Google Form Conversion - Conversion Testing",()=>{
    let form = formMock;
    let result = googleFormConversion.convert(form);
    let expactedResult = "?entry.2005620554="+form.name.value
    +"&entry.1045781291="+form.email.value
    +"&entry.1166974658="+form.phone.value
    +"&entry.1175889186="+form.subject.value
    +"&entry.839337160="+form.message.value;
    expect(result).toBe(expactedResult);
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Deepak/i);
//   expect(linkElement).toBeInTheDocument();
// });

