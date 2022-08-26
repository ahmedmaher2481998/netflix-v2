import React from "react";
import {
	Title,
	Row,
	Column,
	Container,
	Link,
	Text,
	Break,
} from "./styles/footer";
const Footer = () => {
	return <div>Footer</div>;
};
Footer.Container = ({ children, ...resProps }) => (
	<Container {...resProps}>{children}</Container>
);

Footer.Title = ({ children, ...resProps }) => (
	<Title {...resProps}> {children}</Title>
);
Footer.Row = ({ children, ...resProps }) => (
	<Row {...resProps}> {children}</Row>
);

Footer.Column = ({ children, ...resProps }) => (
	<Column {...resProps}> {children}</Column>
);

Footer.Link = ({ children, ...resProps }) => (
	<Link {...resProps}> {children}</Link>
);

Footer.Text = ({ children, ...resProps }) => (
	<Text {...resProps}> {children}</Text>
);

Footer.Break = ({ children, ...resProps }) => (
	<Break {...resProps}> {children}</Break>
);

export default Footer;
