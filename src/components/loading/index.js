import { Spinner, ReleaseBody, LockBody, Picture } from './styles/loading';

const Loading = ({ src, ...rest }) => {
  return (
    <Spinner {...rest}>
      <LockBody />
      <Picture src={`public/images/users/${src}.png`} />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
export default Loading;
