import classes from './PageNumber.module.css';

const PageNumber = props => {
  let resultsText;

  if (props.resultsList.length > 0) {
    resultsText = `Showing 1-${props.resultsList.length} of ${props.resultsList.length} results.`;
  }
  return (
    <div className={classes['page-number']}>
      <div className={classes.navigate}>
        <button>«</button>
        <span>1</span>
        <button>»</button>
      </div>
      <p>{resultsText}</p>
    </div>
  );
};
export default PageNumber;
