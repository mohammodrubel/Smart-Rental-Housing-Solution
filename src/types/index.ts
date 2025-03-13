export interface IUser {
  id?: string
  name: string;
  email: string;
  hasShop?: boolean;
  isActive?: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
type Landlord = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "Tenant" | "Landlord" | "Admin"; // Adjust roles as needed
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type LandData = {
  _id: string;
  details_description: string;
  multiple_images: string[];
  rent_amount: number;
  number_of_bedrooms: number;
  landlord: Landlord;
  rental_house_location: string;
  amenities: string;
  createdAt: string;
  updatedAt: string;
};

export type GetAllLandResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: LandData[];
};
