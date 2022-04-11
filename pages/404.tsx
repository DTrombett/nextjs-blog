import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

const NotFound = () => (
	<Layout description="This page could not be found" title="404">
		<div className={utilStyles.centered}>This page could not be found!</div>
	</Layout>
);

export default NotFound;
