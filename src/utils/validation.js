export const errorValid = (name) => {
  if (name.type === 'required') {
    return 'is required';
  }
};

// {
//   errors.expEmail && errors.expEmail.type === 'required' && (
//     <span className='text-danger' role='alert'>
//       This is required
//     </span>
//   );
// }
// {
//   errors.expEmail && errors.expEmail.type === 'pattern' && (
//     <span className='text-danger' role='alert'>
//       Please enter a valid email
//     </span>
//   );
// }
// {
//   errors.expEmail && errors.expEmail.type === 'maxLength' && (
//     <span className='text-danger' role='alert'>
//       Max length exceeded
//     </span>
//   );
// }
