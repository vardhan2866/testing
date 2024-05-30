class CustomErr extends Error {
  public statusCode: number;
  public status: boolean;

  constructor(statusCode: number, message: string, status: boolean) {
      super(message);
      this.statusCode = statusCode;
      this.status = status;
  }
}

export {CustomErr};
