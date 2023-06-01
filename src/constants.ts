export const DAY_ERRORS: { [key: string]: string } = {
  required: "This field is required",
  min: "Day must be greater than 0",
  max: "Day must be less than 31",
};

export const MONTH_ERRORS: { [key: string]: string } = {
  required: "This field is required",
  min: "Month must be greater than 0",
  max: "Month must be less than 13",
};

export const YEAR_ERRORS: { [key: string]: string } = {
  required: "This field is required",
  min: "Year must be greater than 0",
  max: "Year cannot be in the future",
};
