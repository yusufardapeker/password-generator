import React from "react";

import CharLength from "./CharLength";
import CharRules from "./CharRules";
import Strength from "./Strength";
import GenerateButton from "./GenerateButton";

function index() {
	return (
		<>
			<CharLength />
			<CharRules />
			<Strength />
			<GenerateButton />
		</>
	);
}

export default index;
