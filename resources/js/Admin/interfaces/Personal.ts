interface Personal {
  id?: number;
  data?: {
    email?: string;
    name?: string;
    photo?: string;
    position?: string;
  }
  created_at?: Date;
  updated_at?: Date;
}

export default Personal
