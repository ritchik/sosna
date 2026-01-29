import MuiRating, { type RatingProps } from '@mui/material/Rating';

export function Rating(props: RatingProps) {
  return <MuiRating readOnly precision={0.5} {...props} />;
}
