declare type LoginData = {
  email: string;
  password: string;
};

declare type RefreshData = {
  id: string;
  refreshToken: string;
};

declare type RegisterData = {
  email: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  roleId: string;
};

declare type ActionResponse = {
  success: boolean;
  message: string;
  inputs: Record<string, string | File> | FormData;
  errors?: Record<string, string[]>;
  data?: unknown;
};
type FetchResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
};
declare type AddressFormData = {
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

declare type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: string;
  refreshTokenExpiresAt: string;
  user: {
    id: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    technicianVerified: boolean;
    roleId: string;
    role: {
      id: string;
      name: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

declare type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

declare type UserInfoData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

declare type SessionPayload = {
  userId: string;
  roleId: string;
  role: string;
  expiresAt: Date;
};

declare type NavSideItem = {
  title: string;
  url: string;
  icon: string;
  shortcut: string[];
};

declare type NavItem = {
  title: string;
  url: string;
  icon: string;
  isActive: boolean;
  items: NavSideItem[];
  shortcut?: string[];
};

declare type ForgotPasswordData = {
  email: string;
};

declare type ResetPasswordData = {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
  otp: string;
};

declare type Feature = {
  id?: string;
  description: string;
  modelId: string;
};

declare type Inventory = {
  quantity: number;
  id: string;
  modelId: string;
  createdAt?: string;
  updatedAt?: string;
};

declare type Category = {
  name: string;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
};

declare type Subcategory = {
  name: string;
  categoryId: string;
  category?: Category;
  createdAt?: string;
  updatedAt?: string;
  id?: string;
};

declare type Model = {
  name: string;
  description: string;
  price: number;
  features: Feature[];
  inventory: Inventory;
  id?: string;
  productId?: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
  inventory?: Inventory;
};

declare type ProductData = {
  id?: string;
  name: string;
  subCategoryId: string;
  subCategory: Subcategory;
  models: Model[];
  createdAt?: string;
  updatedAt?: string;
};

declare type FetchProductsResponse = {
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
  results: ProductData[];
};

declare type ProductQueryParams = {
  page: number;
  limit: number;
};

declare type FlattenProductsData = {
  productId: string;
  productName: string;
  category: string;
  subCategory: string;
  modelId: string;
  modelName: string;
  description: string;
  price: number;
  inventory: number;
  features: Feature[];
};

declare type OrderQueryParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  status?: string;
};

declare type OrdersData = {
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
  results: Order[];
};

declare type ProductModel = {
  id: string;
  name: string;
  price: number;
  description: string;
};

declare type OrderItem = {
  id: string;
  orderId: string;
  productModelId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productModel: ProductModel;
};

declare type Order = {
  id: string;
  userId: string;
  orderPrice: number;
  vat: number;
  total: number;
  first_name: string;
  last_name: string;
  company_name: string | null;
  street_address: string;
  apartment: string | null;
  town: string;
  phone_number: string;
  email: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
};

declare type SummaryData = {
  revenueKsh: number;
  totalOrders: number;
  topCustomers: {
    customerId: string;
    name: string;
    email: string;
    totalSpent: number;
  }[];
  topModels: {
    modelId: string;
    name: string;
    quantityOrdered: number;
  }[];
  inventoryValue: number;
  salesByCategory: {
    [category: string]: number;
  };
  salesPerDuration: {
    monthly: {
      [month: string]: number;
    };
    weekly: {
      [week: string]: number;
    };
    yearly: {
      [year: string]: number;
    };
  };
};

declare type DurationKey = "monthly" | "weekly" | "yearly";