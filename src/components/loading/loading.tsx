import { Backdrop, CircularLoading } from './loading.styles';

const Loading = () => {
  return (
    <Backdrop>
      <CircularLoading className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </CircularLoading>
    </Backdrop>
  );
};

export default Loading;
