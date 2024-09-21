export interface IDoctor {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: string;
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialties?: ISpecialties;
}

export interface ISpecialties {
  specialtiesId: string;
  isDeleted?: null;
}

export interface IDoctorFormData {
  doctor: IDoctor;
  password: string;
}
