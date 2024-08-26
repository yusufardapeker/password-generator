import React from "react";

import CharLength from "./CharLength";
import CharRules from "./CharRules";
import Strength from "./Strength";
import GenerateButton from "./GenerateButton";

function index() {
	return (
		<div className="generator">
			<CharLength />
			<CharRules />
			<Strength />
			<GenerateButton />
		</div>
	);
}

export default index;
