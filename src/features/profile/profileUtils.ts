import fakeUsers from './fakeUsers.json';
import * as yup from "yup";

type Profile = {
    "id": number,
    "first_name": string, // 255 char max / required",
    "last_name": string, // 255 char max / required",
    "phone": string, // 255 char max / required",
    "email": string, // 255 char max / required",
    "address": string, // 255 char max / required",
    "city": string, // 255 char max / required",
    "state": string, // 255 char max / required",
    "zip": string, // 255 char max / required",
    "photo"?: string, // 255 char max / URL to image file",
    "notes"?: string, // 4GB max"
}

const blankFormState = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  photo: '',
  notes: '',
}

type ProfileState = {
  profiles: Profile[];
  inFocus: Profile | null;
  loading: boolean;
}

const makeFakeUserList = ():Profile[] => {
  return fakeUsers.map((user)=>{
    const names = user.name.split(' ');
    const first_name = names.shift() as string;
    const last_name = names.join(' ');
    const profileFromUser:Profile = {
      id: user.id,
      first_name,
      last_name,
      phone: user.phone,
      email: user.email,
      address: [user.address.street, user.address.suite].join(' '),
      city: user.address.city,
      state: '',
      zip: user.address.zipcode,
      photo: '',
      notes: user.website || ''
    }
    return profileFromUser;
  })
}

const validationSchema = yup.object().shape({
  first_name: yup.string().max(255).required("First name is required"),
  last_name: yup.string().max(255).required("Last name is required"),
  phone: yup.string().max(255).required("Phone is required"),
  email: yup
    .string()
    .max(255)
    .email("Invalid email format")
    .required("Email is required"),
  address: yup.string().max(255).required("Address is required"),
  city: yup.string().max(255).required("City is required"),
  state: yup.string().max(255).required("State is required"),
  zip: yup.string().max(255).required("ZIP is required"),
  photo: yup.string().max(255).url("Invalid URL format").optional(),
  notes: yup
    .string()
    .max(4 * 1024 * 1024 * 1024)
    .optional(), // 4GB max
});

export {
  validationSchema,
  makeFakeUserList,
  blankFormState,
  type Profile,
  type ProfileState,
}