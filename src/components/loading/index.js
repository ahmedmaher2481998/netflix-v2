import { Spinner, ReleaseBody, LockBody, Picture } from './styles/loading';

const Loading = ({ src, ...rest }) => {
  return (
    <Spinner data-testid="loading" {...rest}>
      <Picture src={`/images/users/${src}.png`} alt={'user profile image'} />
      <LockBody />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
export default Loading;
