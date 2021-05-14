import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h2 style={{ color: "#68A2ff",
				textAlign: "center",
				marginTop: "-50px" }}>
		Parcel Manager: A complete under developing Parcel Management System
	</h2>
	<Container>
		<Row>
		<Column>
			<Heading href="#">About Us</Heading>
		</Column>
		<Column>
			<Heading href="#">Services</Heading>
		</Column>
		<Column>
			<Heading href="#">Contact Us</Heading>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
