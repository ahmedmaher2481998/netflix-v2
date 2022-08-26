import React from "react";
import {
	Inner,
	Item,
	Pane,
	Container,
	Image,
	Subtitle,
	Title,
} from "./styles/jumbotron";

const JumboTron = ({ children, direction = "row", ...restProps }) => {
	return (
		<Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
};

JumboTron.Container = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);

JumboTron.Pane = ({ children, ...restProps }) => (
	<Pane {...restProps}>{children}</Pane>
);

JumboTron.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

JumboTron.Subtitle = ({ children, ...restProps }) => (
	<Subtitle {...restProps}>{children}</Subtitle>
);

JumboTron.Image = ({ ...restProps }) => <Image {...restProps} />;

export default JumboTron;
