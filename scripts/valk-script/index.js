/*  SCRIPT BY SHIRA - Kishirika Kishirisu#6329  -valk  | new upd 27.12.20*/
'use strict'
//DONT TOUCH ANYTHING UNDER HERE =============================
const JOB_VALK =12;

//Valk Skills
const S_P =11200;
const S_P12 =11230;
const S_P13 =16200;
const S_P2 =11201;
const S_P22 =16201;
const S_P3 =11202;
const S_P32 =16202;
const S_P4 =11203;
const S_P42 =16203;
const S_P43 =16230;
const S_P_D =1100;
const S_P2_D =1200;
const S_P3_D =1450;
const S_P4_D =1925;

const S_P_RESET =1100;

const S_OHSlash =20700;
const S_OHSlash2 =20730;
const S_OHSlash12 =25700;
const S_OHSlash22 =25730;
const S_OHSlash_D =1900;

const S_GlaiveStrike =30900;
const S_GlaiveStrike2 =30930;
const S_GlaiveStrike12 =35900;
const S_GlaiveStrike22 =35930;
const S_GlaiveStrike_D = 2450; // req buff 10155112

const S_Mael =50500;
const S_Mael2 =50530;
const S_Mael12 =55500;
const S_Mael22 =55530;
const S_Mael_D =3150;

const S_Leap =61200;
const S_Leap2 =61230;
const S_Leap12 =66200;
const S_Leap22 =66230;
const S_Leap_D =1775;

const S_Spin =70900;
const S_Spin12 =75900;
const S_Spin13 =70930;
const S_Spin2 =70901;
const S_Spin22 =75901;
const S_Spin3 =70902;
const S_Spin32 =75902;
const S_Spin33 =75930;
const S_Spin_D =1775;
const S_Spin_D2 =1775;
const S_Spin_D3 =2300;

const S_Titan =80100;
const S_Titan12 =85100;
const S_Titan13 =80130;
const S_Titan2 =80101;
const S_Titan22 =85101;
const S_Titan23 =85130;
const S_Titan_D =7700;
const S_Titan_D2 =2000;

const S_GroundB =91100;
const S_GroundB2 =91130;
const S_GroundB12 =96100;
const S_GroundB22 =96130;
const S_GroundB_D =1450;

const S_Dream =101100;
const S_Dream2 =101130;
const S_Dream12 =106100;
const S_Dream22 =106130;
const S_Dream_D =1775;

const S_Shiny =110400;
const S_Shiny2 =110430;
const S_Shiny3 =110401;
const S_Shiny4 =110431;
const S_Shiny5 =115400;
const S_Shiny6 =115430;
const S_Shiny7 =115401;
const S_Shiny8 =115431;
const S_Shiny_D =2725;
const S_Shiny_D2 =2500;

const S_Rag =120100;
const S_Rag2 =120130;
const S_Rag_D =2800;

const S_Blood =131100;
const S_Blood2 =131130;
const S_Blood3 =136100;
const S_Blood4 =136130;
const S_Blood_D =1700;

const Roll =140100;
const Roll2 =140101;
const S_Roll_D =825;

const S_Wind =151100;
const S_Wind2 =151130;
const S_Wind3 =156100; 
const S_Wind4 =156130;
const S_Wind_D =1100;

const S_Rune =161200;
const S_Rune2 =161230;
const S_Rune3 =166200;
const S_Rune4 =166230;
const S_Rune_D =1325;

const S_Tear =170100;
const S_Tear_D =1075;

const S_Recl =190100;
const S_Recl2 =190130;
const S_Recl_D =1525;

const S_BS =200800;
const S_BS2 =205800;
const S_BS_D =1500;

const S_Dark =210100;
const S_Dark2 =215100;
const S_Dark_D =925;

const S_RETAL =181000;
const S_RETAL_D =1630;

const SKILL_CHARGING =41000;
const SKILL_CHARGING12 =41099;
const SKILL_CHARGING2 =41010;
const SKILL_CHARGING22 =41011;
const SKILL_CHARGING2_D =900;
const SKILL_CHARGING22_D =400;
//const SKILL_CHARGING_DISTANCE =434;
//const SKILL_CHARGING_DURATION =550;

const S_CH_Rag =46000;
const S_CH_Rag2 =46010;
const S_CH_Rag3 =46011;

const S_HALF_MOON = 230100; // +2 new
const S_HALF_MOON_RAG =235100;
const S_HALF_MOON_D =900;

const S_AGGRE =240100;
const S_AGGRE_RAG =245100;
const S_AGGRE_D1 =2050;
const S_AGGRE_D2 =2050;
const S_AGGRE_D3 =2760;
const S_AGGRE_D4 =3850;


const S_WARCRY =250100;
const S_WARCRY_2 =250102;
const S_WARCRY_D =4420;
const S_WARCRY_2_D1 = 1060; //1225;
const S_WARCRY_2_D2 =3720;
const BLACKLIST = [110100, 111110, 111111, 111112, 111113, 111114, 111115, 111116, 111117, 111118, 111119, 111120, 111121, 111122, 111124, 111125,
	111126, 111127, 111128, 111129, 111130, 111131, 111134, 111135, 111139, 111140, 111143, 111144, 111145, 111190, 111191, 111193,
	111194, 111195, 111197, 111199, 111202, 111203, 116001, 116002, 116003, 116004, 117002, 117003, 140100, 460100, 480100, 900001,
	111136, 111137, 111138, 111141, 111142, 111147, 111149, 111150, 111151, 111152, 111153, 111154, 111155, 111156, 111157, 111158,
	211141, 211150, 111123, 111132, 111133, 111146, 111148, 111192, 111196, 111198, 211145, 111159, 111160, 111161, 111162, 111163,
	111164, 111165, 111166, 111168, 111169, 111170, 111171, 111172, 111173, 111174, 111175, 111176, 111177, 111178, 111179, 111180,
	111204, 111205, 111206, 111207, 111208, 111209, 111210, 111211, 111212, 111214, 111215, 111216, 111217, 111218, 111219, 111220,
	111221, 111222, 111223, 111224, 111225, 111226, 111227, 111228, 111229, 111230, 111231, 111232, 111233, 111234, 111235, 111236,
	111237, 111238, 111239, 111241, 111242, 111243, 111244, 111245, 111246, 111247, 111248, 111249, 111250, 111251, 111252, 111253,
	111254, 111255, 111256, 111257, 111258, 111259, 111260, 111261, 111262, 111263, 111264, 111265, 111266, 111267, 111268, 111269,
	111270, 111271, 111272, 111273, 111274, 111275, 111276, 111277, 111278, 111279, 111280, 111281, 111282, 111283, 111284, 111285,
	111286, 111287, 111288, 111289, 111290, 111291, 111292, 111293, 111294, 111295, 111296, 111297, 111298, 111299, 111301, 111302];
module.exports = function valk(dispatch) {

	let config = {};
	let settingTimeout = null;
	let settingLock = false;
	const path = require('path');
	const fs = require('fs');

	try { config = require('./config.json'); }
	catch (e) {
		config = {};
		settingUpdate();
	}

	function settingUpdate() {
		clearTimeout(settingTimeout);
		settingTimeout = setTimeout(settingSave,1000);
	}

	function settingSave() {
		if (settingLock) {
			settingUpdate();
			return;
		}

		settingLock = false;
		fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config, undefined, '\t'), err => {
			settingLock = false;
		});
	}


	//change GLOBAL_LATENCY to your lowest usual ping
	let GLOBAL_LATENCY =0;
	if (("GLOBAL_LATENCY" in config)) {
		GLOBAL_LATENCY = config.GLOBAL_LATENCY;
	}
	if (!("GLOBAL_LATENCY" in config)) {
		config.GLOBAL_LATENCY =0;
		config.GLOBAL_LATENCY_DESCRIPTION = "change GLOBAL_LATENCY to your lowest usual ping";
		settingUpdate();
	}

	let DISABLE_BACKSTAB = false;
	if (("DISABLE_BACKSTAB" in config)) {
		DISABLE_BACKSTAB = config.DISABLE_BACKSTAB;
	}
	if (!("DISABLE_BACKSTAB" in config)) {
		config.DISABLE_BACKSTAB = false;
		config.DISABLE_BACKSTAB_DESCRIPTION = "disables backstab spoofing (spoofed backstab is much faster but will not turn camera)";
		settingUpdate();
	}

	//ROBOTJS Options - DO NOT USE WITHOUT ROBOTJS
	let DARK_RUNEBURST = false;
	if (("DARK_RUNEBURST" in config)) {
		DARK_RUNEBURST = config.DARK_RUNEBURST;
	}
	if (!("DARK_RUNEBURST" in config)) {
		config.DARK_RUNEBURST = false;
		config.DARK_RUNEBURST_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - setting it to true will chain Dark Herald -> Runeburst. Can toggle with runeburst1 command.";
		settingUpdate();
	}
	let RUNEBURST_KEY = "4";
	if (("RUNEBURST_KEY" in config)) {
		RUNEBURST_KEY = config.RUNEBURST_KEY;
	}
	if (!("RUNEBURST_KEY" in config)) {
		config.RUNEBURST_KEY = "4";
		config.RUNEBURST_KEY_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - Key for Runeburst, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let SHINING_DOUBLEHIT = false;
	if (("SHINING_DOUBLEHIT" in config)) {
		SHINING_DOUBLEHIT = config.SHINING_DOUBLEHIT;
	}
	if (!("SHINING_DOUBLEHIT" in config)) {
		config.SHINING_DOUBLEHIT = false;
		config.SHINING_DOUBLEHIT_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - setting it to true will autochain shining crescent second hit.";
		settingUpdate();
	}
	let SHINING_KEY = "8";
	if (("SHINING_KEY" in config)) {
		SHINING_KEY = config.SHINING_KEY;
	}
	if (!("SHINING_KEY" in config)) {
		config.SHINING_KEY = "8";
		config.SHINING_KEY_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - Key for Shining Crescent, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let SHINING_GUNGNIR = false;
	if (("SHINING_GUNGNIR" in config)) {
		SHINING_GUNGNIR = config.SHINING_GUNGNIR;
	}
	if (!("SHINING_GUNGNIR" in config)) {
		config.SHINING_GUNGNIR = false;
		config.SHINING_GUNGNIR_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - setting it to true will autochain gungnir after first shiny hit.";
		settingUpdate();
	}
	
	let GUNGNIR_KEY = "8";
	if (("GUNGNIR_KEY" in config)) {
		GUNGNIR_KEY = config.GUNGNIR_KEY;
	}
	if (!("GUNGNIR_KEY" in config)) {
		config.GUNGNIR_KEY = "8";
		config.GUNGNIR_KEY_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - Key for Gungnir Bite, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let DREAMSLASH_LOCK = true;
	if (("DREAMSLASH_LOCK" in config)) {
		DREAMSLASH_LOCK = config.DREAMSLASH_LOCK;
	}
	if (!("DREAMSLASH_LOCK" in config)) {
		config.DREAMSLASH_LOCK = true;
		config.DREAMSLASH_LOCK_DESCRIPTION = "Improves dreamslash stability at high ping, but you lose the ability to cancel dreamslash.";
		settingUpdate();
	}
	
	let SHINING_LOCK = false;
	if (("SHINING_LOCK" in config)) {
		SHINING_LOCK = config.SHINING_LOCK;
	}
	if (!("SHINING_LOCK" in config)) {
		config.SHINING_LOCK = false;
		config.SHINING_LOCK_DESCRIPTION = "Shining delay lock, second hit cannot be used within this period.";
		settingUpdate();
	}
	
	let SHINING_LOCK_DURATION =400;
	if (("SHINING_LOCK_DURATION" in config)) {
		SHINING_LOCK_DURATION = config.SHINING_LOCK_DURATION;
	}
	if (!("SHINING_LOCK_DURATION" in config)) {
		config.SHINING_LOCK_DURATION =400;
		config.SHINING_LOCK_DURATION_DESCRIPTION = "Shining delay lock, second hit cannot be used within this period.";
		settingUpdate();
	}
	
	let LEAPSLASH_INTO_GROUNDBASH = false;
	if (("LEAPSLASH_INTO_GROUNDBASH" in config)) {
		LEAPSLASH_INTO_GROUNDBASH = config.LEAPSLASH_INTO_GROUNDBASH;
	}
	if (!("LEAPSLASH_INTO_GROUNDBASH" in config)) {
		config.LEAPSLASH_INTO_GROUNDBASH = false;
		config.LEAPSLASH_INTO_GROUNDBASH_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - setting it to true will chain Leap Slash -> Ground Bash.";
		settingUpdate();
	}
	let GROUNDBASH_KEY = "7";
	if (("GROUNDBASH_KEY" in config)) {
		GROUNDBASH_KEY = config.GROUNDBASH_KEY;
	}
	if (!("GROUNDBASH_KEY" in config)) {
		config.GROUNDBASH_KEY = "7";
		config.GROUNDBASH_KEY_DESCRIPTION = "DO NOT USE WITHOUT ROBOTJS - Key for Ground Bash, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let GF_X = false;
	if (("GF_X" in config)) {
		GF_X = config.GF_X;
	}
	if (!("GF_X" in config)) {
		config.GF_X = false;
		config.GF_X_DESCRIPTION = "Auto use X_KEY when Godsfall is used. X_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let RAGNAROK_X = false;
	if (("RAGNAROK_X" in config)) {
		RAGNAROK_X = config.RAGNAROK_X;
	}
	if (!("RAGNAROK_X" in config)) {
		config.RAGNAROK_X = false;
		config.RAGNAROK_X_DESCRIPTION = "Auto use X_KEY when Ragnarok is used. X_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let X_KEY = "3";
	if (("X_KEY" in config)) {
		X_KEY = config.X_KEY;
	}
	if (!("X_KEY" in config)) {
		config.X_KEY = "3";
		config.X_KEY_DESCRIPTION = "X Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let Y_KEY = X_KEY;
	if (("Y_KEY" in config)) {
		Y_KEY = config.Y_KEY;
	}
	if (!("Y_KEY" in config)) {
		config.Y_KEY = X_KEY;
		config.Y_KEY_DESCRIPTION = "Y Key (keep the same as X_KEY if you don't want a second skill to activate). Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let Z_KEY = X_KEY;
	if (("Z_KEY" in config)) {
		Z_KEY = config.Z_KEY;
	}
	if (!("Z_KEY" in config)) {
		config.Z_KEY = X_KEY;
		config.Z_KEY_DESCRIPTION = "Z Key (keep the same as X_KEY if you don't want a second skill to activate). Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let FAST_RB = false;
	if (("FAST_RB" in config)) {
		FAST_RB = config.FAST_RB;
	}
	if (!("FAST_RB" in config)) {
		config.FAST_RB = false;
		config.FAST_RB_DESCRIPTION = "Fast runeburst. Runeburst casts faster but deals less damage.";
		settingUpdate();
	}

	let KR_GLAIVETALENT = false;


	let cid;
	let job;
	let model;
	let enabled = false;
	let aspd;
	
	let msgSuppress;

	let atkid = [];
	let atkid_base = 0xFEFEFFEE;
	
	let SKILL_CHARGING_DISTANCE =434;
	let SKILL_CHARGING_DURATION =550;

	let disabSkill = [];
	let startTime = [];
	let timer = [];
	let finishcheck = [];
	let finish = [];

	let KR_DREAMSLASH = false;

	let GSActive = false;
	let titanActive = false;
	let darkActive = false;

	let punchCounter =0;
	let spinCounter = false;
	let spinCounter2 = false;
	let clearPunchCounter;

	let yoloToggle = false;

	let glyphState = [];

	let timer2;
	let satan;

	let halfmooncounter = false;
	let barbaggro =0;

	let lastSkillTime = [];
	let lastSkillDelay;
	let lastLastSkill;
	let lastLastSkillDelay;
	let lastSkillStart;
	let lastSkillEvent;
	let RecheckTimer;

	let warcrystate = false;

	let telex;
	let teley;
	let telez;
	let telew;
	
	let sclock = false;

	let Ignore1 = false;
	let Ignore2;

	let edgeStack =0;

	let chargex;
	let chargey;
	let chargez;

	let spinner;
	let spinner2;
	
	let speedshiny = false;

	let xloc;
	let yloc;
	let zloc;
	let wloc;
	let timeloc;

	let xloc2;
	let yloc2;
	let zloc2;

	let lastSkill =0;
	let lastEvent = { skill: undefined };
	let lastEventTime;
	let GLOBAL_LOCK_DELAY =300;

	let failsafe =0;

	var atkArr;

	let talentState = [];
	dispatch.hook('S_LOAD_EP_INFO', dispatch.majorPatchVersion >= 96 ? 2 : 1, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

	dispatch.hook('S_LEARN_EP_PERK', 1, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});
	
	dispatch.hook('TTB_S_LOAD_EP_PAGE', 1, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

	dispatch.hook('S_LOAD_TOPO', 3, (event) => {
		if (event.zone ==118) {
			enabled = false;
		}
		else {
			enabled = [JOB_VALK].includes(job);
		}
	});

	dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		cid = event.gameId;
		model = event.templateId;
		job = (model -10101) %100;
		enabled = [JOB_VALK].includes(job);
		if(dispatch.majorPatchVersion >= 79 && dispatch.majorPatchVersion <80){
			SKILL_CHARGING_DISTANCE =494;
			SKILL_CHARGING_DURATION =1200;
		}
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("disable12")) {
			enabled = false;
			console.log("Valk script disabled");
			return false;
		}
		if (event.message.includes("enable12")) {
			enabled = [JOB_VALK].includes(job);
			console.log("Valk script enabled if you are currently logged into valk");
			return false;
		}
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("runeburst1")) {
			DARK_RUNEBURST = !DARK_RUNEBURST;
			console.log("Dark herald -> runeburst is set to: " + DARK_RUNEBURST);
			return false;
		}
	});

	function fakeDB(event, duration) {
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		if (finish[lastSkill] == false) {
			force_end(lastEvent,4);
		}
		finish[SKILL_CHARGING] = true;
		finish[S_CH_Rag] = true;
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;

		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: 0,
			speed: aspd,
			...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, animSeq: [],
		});
		lastSkillDelay = duration / aspd;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			};
		}, duration / aspd, event);
		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
		timer[event.skill.id] = setTimeout(
			function (event) {
				if (lastSkill ==1) { return; }
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					type: 0,
					id: atkid[event.skill.id],
				});
			}, duration / aspd, event);
	}

	function charge(event) {
		chargex = false;
		chargey = false;
		chargez = false;
		finish[SKILL_CHARGING] = true;
		finish[S_CH_Rag] = true;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		var vvv =71381;
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		setTimeout(function () {
			dispatch.toClient('S_ACTION_STAGE', 9, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				stage: 0,
				speed: 1,
				...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
				id: atkid[event.skill.id],
				effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, animSeq: [],
			});
			dispatch.toClient('S_INSTANT_DASH', 3, {
				gameId: cid,
				target: 0n,
				unk: 0,
				loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
				w: event.w,
			});
		},0);
		var zzzz = Math.pow((Math.pow((event.loc.x - event.dest.x),2) + Math.pow((event.loc.y - event.dest.y),2)), 0.5) / SKILL_CHARGING_DISTANCE * SKILL_CHARGING_DURATION;
		lastSkillDelay = zzzz;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 39,
				id: atkid[event.skill.id],
			};
		}, zzzz, event);
		timer[event.skill.id] = setTimeout(function (event) {
			if (lastSkill == SKILL_CHARGING || lastSkill == SKILL_CHARGING12 || lastSkill == S_CH_Rag) {
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: chargex || event.dest.x,
						y: chargey || event.dest.y,
						z: chargez || event.dest.z
					},
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					type: 39,
					id: atkid[event.skill.id],
				});
				finish[event.skill.id] = true;
			}
		}, zzzz, event);
	}


	function force_end(event, unkz) {
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			type: unkz, //0x02
			id: atkid[event.skill.id],
		});
		clearTimeout(timer[event.skill.id]);
	}

	function force_endchain(event, unkz) {
		var skillC = event.skill.id +30;
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: skillC,
			type: unkz, //0x02
			id: atkid[skillC],
		});
		clearTimeout(timer[event.skill.id]);
	}
	
	dispatch.hook('S_RP_SKILL_POLISHING_LIST', 1, (event) => {
		if (!enabled) return;
		try{
		event.optionEffects.forEach(function(element){
		if(element.id ==17131102){
			speedshiny = element.active;
		}
		});
		}
		catch (e) { }
	});
	
	dispatch.hook('S_CANNOT_START_SKILL', 4, {order: -999}, (event) => {
		if (!enabled) return;
		if(event.skill.id === S_BS || event.skill.id === S_BS2){
			return false;
		}
	});
	
	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) return;
		if(dispatch.parseSystemMessage(event.message).id == "SMT_SKILL_FAIL_CATEGORY") {return false};
	});


	function fakeEnd_sorc_dist(event, duration, dist) {
		if ((event.skill.id == S_BS || event.skill.id == S_BS2) && DISABLE_BACKSTAB) {
			return;
		}
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		var yyy =1;
		var zzz =0;
		xloc2 = false;
		yloc2 = false;
		zloc2 = false;
		if (event.skill.id == S_BS || event.skill.id == S_BS2) {
			telex = false;
			teley = false;
			telez = false;
			telew = false;
		}
		if (duration == S_Titan_D || event.skill.id == Roll || event.skill.id == S_Tear || event.skill.id == S_Dark || event.skill.id == S_Dark2) {
			yyy = 1 / aspd;
		}
		if ((event.skill.id == S_Rune || event.skill.id == S_Rune3) && !FAST_RB) {
			yyy = 1 / aspd;
		}
		if ((event.skill.id == S_Dream || event.skill.id == S_Dream12) && glyphState[33020] ==1) {
			yyy = 1.2;
		}
		if (finish[lastSkill] == false && zzz == 0 && event.skill.id != S_BS && event.skill.id != S_BS2) {
			force_end(lastEvent,4);
			finish[lastSkill] = true;
		}
		/*if (talentState[940310] && event.skill != S_GlaiveStrike && event.skill != S_GlaiveStrike12 && event.skill != S_GlaiveStrike2 && event.skill != S_GlaiveStrike22 && (lastSkill == S_GlaiveStrike || lastSkill == S_GlaiveStrike12 || lastSkill == S_GlaiveStrike2 || lastSkill == S_GlaiveStrike22)) {
			yyy = yyy + (talentState[940310] * 5 / 700 + 40 /700);
		}*/
		if (talentState[940310] && (event.skill == S_GlaiveStrike || event.skill == S_GlaiveStrike12 || event.skill == S_GlaiveStrike2 || event.skill == S_GlaiveStrike22)) {
			yyy = yyy + (talentState[940310] * 5 / 700 + 40 /700);
		}
		if ((event.skill.id == S_HALF_MOON || event.skill.id == S_HALF_MOON_RAG) && halfmooncounter) {
			zzz =2;
		}
		if((event.skill.id == S_Shiny || event.skill.id == S_Shiny2 || event.skill.id == S_Shiny3 || event.skill.id == S_Shiny4 || event.skill.id == S_Shiny5 || event.skill.id == S_Shiny6 || event.skill.id == S_Shiny7 || event.skill.id == S_Shiny8) && speedshiny){
			yyy = yyy * 1.15;
		}			
		if (event.skill.id == S_AGGRE || event.skill.id == S_AGGRE_RAG) {
			zzz = barbaggro;
			if (barbaggro ==2) {
				duration = S_AGGRE_D2;
				//barbaggro =3;
			}
			if (barbaggro ==3) {
				duration = S_AGGRE_D3;
				//barbaggro =4;
			}
			if (barbaggro ==4) {
				duration = S_AGGRE_D4;
				dist =100;
				//barbaggro =0;
			}
			if (barbaggro ==0) {
				duration = S_AGGRE_D1;
				//barbaggro =2;
			}
		}
		if (event.skill.id == S_WARCRY_2) {
			var newX2 =0;
			var newY2 =0;
			var angle2 = parseFloat(event.w);
			newX2 = Math.cos(angle2) *560;
			newY2 = Math.sin(angle2) *560;
			if ((lastSkill == S_HALF_MOON || lastSkill == S_Shiny3 || lastSkill == S_Shiny4 || lastSkill == S_Shiny7 || lastSkill == S_Shiny8) && finish[lastSkill] == false) {
				zzz =0;
				setTimeout(function (event) {
					if (lastSkill != S_WARCRY_2) {
						return;
					}
					xloc2 = false;
					yloc2 = false;
					zloc2 = false;
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd,
						...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
						id: atkid[event.skill.id],
						effectScale: 1.0, moving: false, dest: { x: newX2, y: newY2, z: event.z1 + 2 }, target: 0n, animSeq: [],
					});
				}, S_WARCRY_2_D1 / aspd, event);
			}
			else {
				zzz =1;
				setTimeout(function (event) {
					if (lastSkill != S_WARCRY_2) {
						return;
					}
					xloc2 = false;
					yloc2 = false;
					zloc2 = false;
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: (event.skill.id +1),
						stage: 1,
						speed: aspd,
						...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
						id: atkid[(event.skill.id +1)],
						effectScale: 1.0, moving: false, dest: { x: newX2, y: newY2, z: event.z1 + 2 }, target: 0n, animSeq: [],
					});
				}, S_WARCRY_2_D1 / aspd, event);
			}
		}
		finish[SKILL_CHARGING] = true;
		finish[S_CH_Rag] = true;
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		atkid[event.skill.id + zzz] = atkid_base;
		atkid_base--;

		var newX1 =0;
		var newY1 =0;
		var newZ1 =0;
		var angle1 = parseFloat(event.w);

		if (event.skill.id == S_WARCRY_2 && zzz ==1) {
			newX1 = Math.cos(angle1) * -375;
			newY1 = Math.sin(angle1) * -375;
			newZ1 = event.loc.z;
		}

		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id + zzz,
			stage: 0,
			speed: aspd * yyy,
			...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd * yyy } : 0n),
			id: atkid[event.skill.id + zzz],
			effectScale: 1.0,
			moving: false,
			dest: {
				x: newX1,
				y: newY1,
				z: newZ1
			},
			target: 0n,
			animSeq: [],
		});

		var newX;
		var newY;
		var angle = parseFloat(event.w);

		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;
		lastSkillDelay = duration / aspd;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: {
					x: event.loc.x + newX,
					y: event.loc.y + newY,
					z: event.loc.z + 2
				},
				w: event.w,
				templateId: model,
				skill: event.skill.id + zzz,
				type: 0,
				id: atkid[event.skill.id + zzz],
			};
		}, duration / (aspd * yyy), event);
		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
		timer[event.skill.id] = setTimeout(
			function (event) {
				if (lastSkill ==1) { return; }
				if(lastSkill == SKILL_CHARGING || lastSkill == SKILL_CHARGING12 || lastSkill == S_CH_Rag){ return; }
				if (lastSkill != S_Dark && lastSkill != S_Dark2 && (event.skill.id == S_Dark || event.skill.id == S_Dark2)) { return; }
				if (event.skill.id == S_Dark || event.skill.id == S_Dark2 || event.skill.id == S_Tear) {
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: {
							x: xloc || event.loc.x + newX,
							y: yloc || event.loc.y + newY,
							z: zloc || event.loc.z + 2
						},
						w: event.w,
						templateId: model,
						skill: event.skill.id + zzz,
						type: 0,
						id: atkid[event.skill.id + zzz],
					});
					return;
				}
				if (event.skill.id == S_BS || event.skill.id == S_BS2) {
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: {
							x: telex || event.loc.x + newX,
							y: teley || event.loc.y + newY,
							z: telez || event.loc.z + 2
						},
						w: telew || event.w,
						templateId: model,
						skill: event.skill.id + zzz,
						type: 0,
						id: atkid[event.skill.id + zzz],
					});
				}
				if (event.skill.id != S_BS && event.skill.id != S_BS2 && lastSkill != S_BS && lastSkill != S_BS2) {
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: {
							x: xloc2 || event.loc.x + newX,
							y: yloc2 || event.loc.y + newY,
							z: zloc2 || event.loc.z + 2
						},
						w: event.w,
						templateId: model,
						skill: event.skill.id + zzz,
						type: 0,
						id: atkid[event.skill.id + zzz],
					});
				}
			}, duration / (aspd * yyy), event);
	}


	dispatch.hook('S_CREST_INFO', 2, (event) => {
		if (!enabled) { return };
		event.crests.forEach(function (element) {
			glyphState[element.id] = element.enable;
		});
	});

	dispatch.hook('S_CREST_APPLY', 2, (event) => {
		if (!enabled) { return };
		glyphState[event.id] = event.enable;
	});

	dispatch.hook('S_WEAK_POINT', 1, (event) => {
		if (!enabled) { return };
		edgeStack = event.runemarksAdded;
	});

	dispatch.hook('C_START_TARGETED_SKILL', 7, (event) => {
		if (!enabled) return;
		if (disabSkill[666] == true && event.skill.id != Roll && event.skill.id != Roll2 && DREAMSLASH_LOCK) {
			return false;
		}
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if ((event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING12 || event.skill.id == S_CH_Rag) && disabSkill[SKILL_CHARGING]) {
			return false;
		}
		if (!disabSkill[event.skill.id]) {
			msgSuppress =0;
			lastSkillDelay =999999;
			if (DISABLE_BACKSTAB == false || event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING12 || event.skill.id == S_CH_Rag) {
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },25);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },50);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },75);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },100);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },150);
				//setTimeout(function(){dispatch.toServer('C_START_TARGETED_SKILL', 7, event);},200);
			}
			if (job == JOB_VALK && event.skill.id != S_P) {
				punchCounter =0;
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING12 || event.skill.id == S_CH_Rag)) {
				charge(event);
				disabSkill[SKILL_CHARGING] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING] = false; }, GLOBAL_LOCK_DELAY *3);
				disabSkill[SKILL_CHARGING12] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING12] = false; }, GLOBAL_LOCK_DELAY *3);
				disabSkill[S_CH_Rag] = true;
				var timer = setTimeout(function () { disabSkill[S_CH_Rag] = false; }, GLOBAL_LOCK_DELAY *3);
			}
			if (job == JOB_VALK && (event.skill.id == S_BS)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_BS] = false; }, GLOBAL_LOCK_DELAY *2);
				fakeEnd_sorc_dist(event, S_BS_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_BS2)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_BS2] = false; }, GLOBAL_LOCK_DELAY *2);
				fakeEnd_sorc_dist(event, S_BS_D,0);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
	});

	dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 4, (event) => {
		if (!enabled) return;
		if (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING12 || event.skill.id == S_CH_Rag) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 39,
				id: atkid[event.skill.id],
			});
		}
	});

	dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		if(event.target === cid) {
			if (event.reaction.enable == true) {
				lastSkill =1;
			}
		}
	});

	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) { return };
		if ((event.message == '@2059' || event.message == '@36') && msgSuppress == event.message) {
			return false;
		}
		msgSuppress = event.message;
	});

	dispatch.hook('S_INSTANT_MOVE', 3, (event) => {
		if (!enabled) { return };
		if(event.gameId === cid) {
			telex = event.loc.x;
			teley = event.loc.y;
			telez = event.loc.z;
			telew = event.w;
		}
	});

	dispatch.hook('S_INSTANT_DASH', 3, (event) => {
		if (!enabled) return;
		if(event.gameId === cid) {
			return false;
		}
	});

	dispatch.hook('S_ABNORMALITY_BEGIN', 4, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if (event.id ==10155112) {
			GSActive = true;
		}
		if (event.id ==10155070) {
			spinCounter = true;
			//console.log("first abnormality "+spinCounter+" second abnormality "+spinCounter2);
		}
		if (event.id ==10155071) {
			spinCounter2 = true;
			//console.log("first abnormality "+spinCounter+" second abnormality "+spinCounter2);
		}
		if (event.id == 10155036 || event.id ==10155037) {
			titanActive = true;
		}
		if (event.id ==10155201) {
			darkActive = true;
		}
		if (event.id ==10155530) {
			halfmooncounter = true;
		}
		if (event.id ==10155540) {
			barbaggro =2;
		}
		if (event.id ==10155541) {
			barbaggro =3;
		}
		if (event.id ==10155542) {
			barbaggro =4;
		}
	});

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if (event.id ==10155112) {
			GSActive = false;
		}
		if (event.id ==10155070) {
			spinCounter = false;
			//console.log("first abnormality "+spinCounter+" second abnormality "+spinCounter2);
		}
		if (event.id ==10155071) {
			spinCounter2 = false;
			//console.log("first abnormality "+spinCounter+" second abnormality "+spinCounter2);
		}
		if (event.id == 10155036 || event.id ==10155037) {
			titanActive = false;
		}
		if (event.id ==10155201) {
			darkActive = false;
		}
		if (event.id ==10155530) {
			halfmooncounter = false;
		}
		if (event.id ==10155540) {
			barbaggro =0;
		}
		if (event.id ==10155541) {
			barbaggro =0;
		}
		if (event.id ==10155542) {
			barbaggro =0;
		}
	});


	function repeater(key, trigger) {
		if (lastSkill == trigger && failsafe <40) {
			failsafe++;
			var robot17 = require("robotjs");
			robot17.keyTap(key);
			setTimeout(function (key, trigger) { repeater(key, trigger); }, 50, key, trigger);
		}
	}


	dispatch.hook('C_START_SKILL', 7, (event) => {
		if (!enabled) return;
		if (disabSkill[666] == true && event.skill.id != Roll && event.skill.id != Roll2 && DREAMSLASH_LOCK) {
			return false;
		}
		lastSkillDelay =999999;
		if ((event.skill.id == S_Spin || event.skill.id == S_Spin13 || event.skill.id == S_Spin12 || event.skill.id == S_Spin33) && (disabSkill[S_Spin] || disabSkill[S_Spin12])) { return false; }

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (job == JOB_VALK && !KR_DREAMSLASH && (event.skill.id == S_Dream || event.skill.id == S_Dream2) && (finish[S_Dream] == false || finish[S_Dream12] == false)) {
			return false;
		}
		if (job == JOB_VALK && !KR_DREAMSLASH && (event.skill.id == S_Dream12 || event.skill.id == S_Dream22) && (finish[S_Dream] == false || finish[S_Dream12] == false)) {
			return false;
		}

		if (job == JOB_VALK && disabSkill[S_HALF_MOON] && event.skill.id == S_HALF_MOON) {
			return false;
		}

		if (job == JOB_VALK && disabSkill[S_HALF_MOON_RAG] && event.skill.id == S_HALF_MOON_RAG) {
			return false;
		}

		if (event.skill.id != S_HALF_MOON) {
			disabSkill[S_HALF_MOON] = false
		}
		if (event.skill.id != S_HALF_MOON_RAG) {
			disabSkill[S_HALF_MOON_RAG] = false
		}

		if (job == JOB_VALK && disabSkill[S_AGGRE] && event.skill.id == S_AGGRE) {
			return false;
		}

		if (job == JOB_VALK && disabSkill[S_AGGRE_RAG] && event.skill.id == S_AGGRE_RAG) {
			return false;
		}
		/*if(disabSkill["checker"] == false && warcrystate){
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: warcrystate.skill.id,
				type: 0, //0x02
				id: warcrystate.id,
			});
		}*/
		warcrystate = false;
		disabSkill["checker"] = true;
		if (job == JOB_VALK && event.skill.id == S_WARCRY_2 && disabSkill[9771]) {
			disabSkill["checker"] = false;
			return;
		}

		//if(job == JOB_VALK && (event.skill.id == S_Spin || event.skill.id == S_Spin13 || event.skill.id == S_Spin12 || event.skill.id == S_Spin33) && (finish[S_Tear] == false )){
		//  return false;
		//}

		if (job == JOB_VALK && (event.skill.id == S_P || event.skill.id == S_P12 || event.skill.id == S_P13 || event.skill.id == S_P43) && (finish[S_GroundB] == false || finish[S_GroundB12] == false || finish[S_GroundB22] == false || finish[S_GroundB2] == false)) {
			return false;
		}

		if (job == JOB_VALK && (event.skill.id == S_P || event.skill.id == S_P12 || event.skill.id == S_P13 || event.skill.id == S_P43) && (finish[S_Recl] == false || finish[S_Recl2] == false)) {
			return false;
		}

		if (job == JOB_VALK && (event.skill.id == S_P || event.skill.id == S_P12 || event.skill.id == S_P13 || event.skill.id == S_P43) && (finish[S_Shiny] == false || finish[S_Shiny2] == false || finish[S_Shiny5] == false || finish[S_Shiny6] == false)) {
			return false;
		}
		if(job == JOB_VALK && (finish[SKILL_CHARGING] == false || finish[S_CH_Rag] == false) && (event.skill.id == S_Dream || event.skill.id == S_Dream2 || event.skill.id == S_Dream12 || event.skill.id == S_Dream22)){
			return false;
		}
		
		if((event.skill.id == S_Shiny3 || event.skill.id == S_Shiny4 || event.skill.id == S_Shiny7 || event.skill.id == S_Shiny8) && sclock){
			return false;
		}
		/*if((finish[SKILL_CHARGING] == false || finish[S_CH_Rag] == false) && (event.skill.id != S_Dark && event.skill.id != S_Dark2 && event.skill.id != S_Spin && event.skill.id != S_Spin12 && event.skill.id != S_Spin13 && event.skill.id != S_Spin2 && event.skill.id != S_Spin22 && event.skill.id != S_Spin3 && event.skill.id != S_Spin32 && event.skill.id != S_Spin33 && event.skill.id != SKILL_CHARGING2 && event.skill.id != SKILL_CHARGING22 && event.skill.id != S_CH_Rag2 && event.skill.id != S_CH_Rag3 && event.skill.id != Roll && event.skill.id != Roll2)){
		return false;
		}*/
		if (!disabSkill[event.skill.id]) {
			msgSuppress =0;
			if (job == JOB_VALK && event.skill.id != S_P && event.skill.id != S_P12 && event.skill.id != S_P13 && event.skill.id != S_P43) {
				punchCounter =0;
			}
			var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
			if (xzzy && event.skill.id != S_AGGRE && event.skill.id != S_AGGRE_RAG && event.skill.id != S_RETAL && (yoloToggle || !yoloToggle) && (event.skill.id != S_Spin && event.skill.id != S_Spin13 && event.skill.id != S_Spin12 && event.skill.id != S_Spin33 && event.skill.id != S_P && event.skill.id != S_P12 && event.skill.id != S_P13 && event.skill.id != S_P43 && event.skill.id != Roll && event.skill.id != Roll2 && event.skill.id != S_Shiny3 && event.skill.id != S_Shiny4 && event.skill.id != S_Shiny7 && event.skill.id != S_Shiny8)) {
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				if (event.skill.id != S_Dream && event.skill.id != S_Dream12 && event.skill.id != S_Dream2 && event.skill.id != S_Dream22) {
					setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
					setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
					setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
					//setTimeout(function(event){dispatch.toServer('C_START_SKILL', 7, event);},200,event);
				}
				yoloToggle = false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny || event.skill.id == S_Shiny2) && (lastSkill == S_Shiny || lastSkill == S_Shiny5) && disabSkill[33]) {
				event.skill.id = S_Shiny3;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny5 || event.skill.id == S_Shiny6) && (lastSkill == S_Shiny5 || lastSkill == S_Shiny) && disabSkill[33]) {
				event.skill.id = S_Shiny7;
			}
			if (job == JOB_VALK && (event.skill.id == S_P || event.skill.id == S_P12)) {
				if (punchCounter ==0) {
					event.skill.id = S_P;
				}
				if (punchCounter ==1) {
					event.skill.id = S_P2;
				}
				if (punchCounter ==2) {
					event.skill.id = S_P3;
				}
				if (punchCounter ==3) {
					event.skill.id = S_P4;
					disabSkill[S_P] = true;
					var timer = setTimeout(function () { disabSkill[S_P] = false; }, S_P4_D / aspd);
					disabSkill[S_P12] = true;
					var timer2 = setTimeout(function () { disabSkill[S_P12] = false; }, S_P4_D / aspd);
				}
			}

			if (job == JOB_VALK && (event.skill.id == S_P13 || event.skill.id == S_P43)) {
				if (punchCounter ==0) {
					event.skill.id = S_P13;
				}
				if (punchCounter ==1) {
					event.skill.id = S_P22;
				}
				if (punchCounter ==2) {
					event.skill.id = S_P32;
				}
				if (punchCounter ==3) {
					event.skill.id = S_P42;
					disabSkill[S_P13] = true;
					var timer = setTimeout(function () { disabSkill[S_P13] = false; }, S_P4_D / aspd);
					disabSkill[S_P43] = true;
					var timer2 = setTimeout(function () { disabSkill[S_P43] = false; }, S_P4_D / aspd);
				}
			}

			if (job == JOB_VALK && (event.skill.id == S_P)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_RESET / aspd);
			}

			if (job == JOB_VALK && event.skill.id == S_P2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P2] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P2_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D);
			}
			if (job == JOB_VALK && event.skill.id == S_P3) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P3] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P3_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D);
			}
			if (job == JOB_VALK && event.skill.id == S_P4) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P4] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P4_D);
				clearTimeout(clearPunchCounter);
				punchCounter =0;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P4_D);
			}

			if (job == JOB_VALK && (event.skill.id == S_P13)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P13] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_RESET / aspd);
			}

			if (job == JOB_VALK && event.skill.id == S_P22) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P22] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P2_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D);
			}
			if (job == JOB_VALK && event.skill.id == S_P32) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P32] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P3_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D);
			}
			if (job == JOB_VALK && event.skill.id == S_P42) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P42] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P4_D);
				clearTimeout(clearPunchCounter);
				punchCounter =0;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P4_D);
			}

			if (job == JOB_VALK && event.skill.id == S_RETAL) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_RETAL] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_RETAL_D,0);
			}

			if (job == JOB_VALK && event.skill.id == S_HALF_MOON) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_HALF_MOON] = false; },1000);
				fakeEnd_sorc_dist(event, S_HALF_MOON_D,0);
			}

			if (job == JOB_VALK && event.skill.id == S_HALF_MOON_RAG) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_HALF_MOON_RAG] = false; },1000);
				fakeEnd_sorc_dist(event, S_HALF_MOON_D,0);
			}

			if (job == JOB_VALK && event.skill.id == S_AGGRE) {
				/*if (barbaggro !=3) {
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[S_AGGRE] = false; },1100);
				}*/
				if (barbaggro ==0) {
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[S_AGGRE] = false; },980);
				}
				if (barbaggro ==2) {
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[S_AGGRE] = false; },960);
				}
				if (barbaggro ==3) {
					//disabSkill[event.skill.id] = true;
					//var timer = setTimeout(function () { disabSkill[S_AGGRE] = false; },1250);
				}
				fakeEnd_sorc_dist(event, S_AGGRE_D1,0);
			}

			if (job == JOB_VALK && event.skill.id == S_AGGRE_RAG) {
				/*if (barbaggro !=3) {
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[S_AGGRE_RAG] = false; },1100);
				}*/
				if (barbaggro ==0) {
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[S_AGGRE_RAG] = false; },980);
				}
				if (barbaggro ==2) {
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[S_AGGRE_RAG] = false; },960);
				}
				if (barbaggro ==3) {
					//disabSkill[event.skill.id] = true;
					//var timer = setTimeout(function () { disabSkill[S_AGGRE_RAG] = false; },1250);
				}
				fakeEnd_sorc_dist(event, S_AGGRE_D1,0);
			}

			if (job == JOB_VALK && event.skill.id == S_WARCRY) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_WARCRY] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[9771] = true;
				setTimeout(function () { disabSkill[9771] = false; }, 3135 / aspd);
				fakeEnd_sorc_dist(event, S_WARCRY_D,0);
				if (GF_X) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
			}

			if (job == JOB_VALK && event.skill.id == S_WARCRY_2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_WARCRY_2] = false; }, GLOBAL_LOCK_DELAY *10);
				fakeEnd_sorc_dist(event, (S_WARCRY_2_D1 + S_WARCRY_2_D2),560);
			}

			if (job == JOB_VALK && (event.skill.id == S_OHSlash || event.skill.id == S_OHSlash2)) {
				event.skill.id = S_OHSlash;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_OHSlash] = false; }, GLOBAL_LOCK_DELAY *4);
				disabSkill[S_OHSlash2] = true;
				var timer2 = setTimeout(function () { disabSkill[S_OHSlash2] = false; }, GLOBAL_LOCK_DELAY *4);
				fakeEnd_sorc_dist(event, S_OHSlash_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_OHSlash12 || event.skill.id == S_OHSlash22)) {
				event.skill.id = S_OHSlash12;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_OHSlash12] = false; }, GLOBAL_LOCK_DELAY *4);
				disabSkill[S_OHSlash22] = true;
				var timer = setTimeout(function () { disabSkill[S_OHSlash22] = false; }, GLOBAL_LOCK_DELAY *4);
				fakeEnd_sorc_dist(event, S_OHSlash_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_GlaiveStrike || event.skill.id == S_GlaiveStrike2) && GSActive) {
				event.skill.id = S_GlaiveStrike;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_GlaiveStrike] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_GlaiveStrike_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_GlaiveStrike12 || event.skill.id == S_GlaiveStrike22) && GSActive) {
				event.skill.id = S_GlaiveStrike12;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_GlaiveStrike12] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_GlaiveStrike_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Mael || event.skill.id == S_Mael2)) {
				event.skill.id = S_Mael;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Mael] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Mael_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Mael12 || event.skill.id == S_Mael22)) {
				event.skill.id = S_Mael12;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Mael12] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Mael_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Leap || event.skill.id == S_Leap2)) {
				event.skill.id = S_Leap;
				GSActive = true;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Leap] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Leap_D,0);
				dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
					target: cid,
					source: cid,
					id: 10155112,
					duration: 4000,
					unk: 0,
					stacks: 1,
					unk2: 0,
					...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
				});
				dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
					target: cid,
					source: cid,
					id: 10155113,
					duration: 4000,
					unk: 0,
					stacks: 1,
					unk2: 0,
					...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
				});
			}
			if (job == JOB_VALK && (event.skill.id == S_Leap12 || event.skill.id == S_Leap22)) {
				event.skill.id = S_Leap12;
				GSActive = true;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Leap12] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Leap_D,0);
				dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
					target: cid,
					source: cid,
					id: 10155112,
					duration: 4000,
					unk: 0,
					stacks: 1,
					unk2: 0,
					...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
				});
				dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
					target: cid,
					source: cid,
					id: 10155113,
					duration: 4000,
					unk: 0,
					stacks: 1,
					unk2: 0,
					...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
				});
			}
			if (job == JOB_VALK && (event.skill.id == S_Spin || event.skill.id == S_Spin13)) {
				if (!spinCounter && !spinCounter2) {
					event.skill.id = S_Spin;
					fakeEnd_sorc_dist(event, S_Spin_D,100);
					disabSkill[S_Spin] = true;
					spinner = setTimeout(function () { disabSkill[S_Spin] = false; }, 540 / aspd);
					disabSkill[S_Spin13] = true;
					spinner2 = setTimeout(function () { disabSkill[S_Spin13] = false; }, 540 / aspd);
				}
				if (spinCounter2 && !spinCounter) {
					/*setTimeout(function(zex){zex.skill = S_Spin; dispatch.toServer('C_START_SKILL', 7, zex);},25, event);
					setTimeout(function(zex){zex.skill = S_Spin; dispatch.toServer('C_START_SKILL', 7, zex);},50, event);
					setTimeout(function(zex){zex.skill = S_Spin; dispatch.toServer('C_START_SKILL', 7, zex);},75, event);
					setTimeout(function(zex){zex.skill = S_Spin; dispatch.toServer('C_START_SKILL', 7, zex);},100, event);*/
					event.skill.id = S_Spin3;
					fakeEnd_sorc_dist(event, S_Spin_D3,100);
					disabSkill[S_Spin] = true;
					spinner = setTimeout(function () { disabSkill[S_Spin] = false; }, S_Spin_D3 / aspd);
					disabSkill[S_Spin13] = true;
					spinner2 = setTimeout(function () { disabSkill[S_Spin13] = false; }, S_Spin_D3 / aspd);
				}
				if (spinCounter && !spinCounter2) {
					event.skill.id = S_Spin2;
					fakeEnd_sorc_dist(event, S_Spin_D2,100);
					disabSkill[S_Spin] = true;
					spinner = setTimeout(function () { disabSkill[S_Spin] = false; }, 250 / aspd);
					disabSkill[S_Spin13] = true;
					spinner2 = setTimeout(function () { disabSkill[S_Spin13] = false; }, 250 / aspd);
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Spin12 || event.skill.id == S_Spin33)) {
				if (!spinCounter && !spinCounter2) {
					event.skill.id = S_Spin12;
					fakeEnd_sorc_dist(event, S_Spin_D,100);
					disabSkill[S_Spin12] = true;
					spinner = setTimeout(function () { disabSkill[S_Spin12] = false; }, 540 / aspd);
					disabSkill[S_Spin33] = true;
					spinner2 = setTimeout(function () { disabSkill[S_Spin33] = false; }, 540 / aspd);
				}
				if (spinCounter2 && !spinCounter) {
					/*setTimeout(function(zex){zex.skill = S_Spin12; dispatch.toServer('C_START_SKILL', 7, zex);},25, event);
					setTimeout(function(zex){zex.skill = S_Spin12; dispatch.toServer('C_START_SKILL', 7, zex);},50, event);
					setTimeout(function(zex){zex.skill = S_Spin12; dispatch.toServer('C_START_SKILL', 7, zex);},75, event);
					setTimeout(function(zex){zex.skill = S_Spin12; dispatch.toServer('C_START_SKILL', 7, zex);},100, event);*/
					event.skill.id = S_Spin32;
					fakeEnd_sorc_dist(event, S_Spin_D3,100);
					disabSkill[S_Spin12] = true;
					spinner = setTimeout(function () { disabSkill[S_Spin12] = false; }, S_Spin_D3 / aspd);
					disabSkill[S_Spin33] = true;
					spinner2 = setTimeout(function () { disabSkill[S_Spin33] = false; }, S_Spin_D3 / aspd);
				}
				if (spinCounter && !spinCounter2) {
					event.skill.id = S_Spin22;
					fakeEnd_sorc_dist(event, S_Spin_D2,100);
					disabSkill[S_Spin12] = true;
					spinner = setTimeout(function () { disabSkill[S_Spin12] = false; }, 250 / aspd);
					disabSkill[S_Spin33] = true;
					spinner2 = setTimeout(function () { disabSkill[S_Spin33] = false; }, 250 / aspd);
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Titan || event.skill.id == S_Titan13)) {
				if (!titanActive) {
					event.skill.id = S_Titan;
					fakeEnd_sorc_dist(event, S_Titan_D,0);
				}
				if (titanActive) {
					event.skill.id = S_Titan2;
					fakeEnd_sorc_dist(event, S_Titan_D2,0);
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Titan12 || event.skill.id == S_Titan23)) {
				if (!titanActive) {
					event.skill.id = S_Titan12;
					fakeEnd_sorc_dist(event, S_Titan_D,0);
				}
				if (titanActive) {
					event.skill.id = S_Titan22;
					fakeEnd_sorc_dist(event, S_Titan_D2,0);
				}
			}

			if (job == JOB_VALK && (event.skill.id == S_GroundB || event.skill.id == S_GroundB2) && GSActive) {
				event.skill.id = S_GroundB;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_GroundB] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_GroundB_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_GroundB12 || event.skill.id == S_GroundB22) && GSActive) {
				event.skill.id = S_GroundB12;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_GroundB12] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_GroundB_D,0);
			}

			if (job == JOB_VALK && (event.skill.id == S_Dream || event.skill.id == S_Dream2)) {
				event.skill.id = S_Dream;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Dream] = false; }, GLOBAL_LOCK_DELAY *3);
				fakeEnd_sorc_dist(event, S_Dream_D,0);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},25);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},50);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},75);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},100);
			}
			if (job == JOB_VALK && (event.skill.id == S_Dream12 || event.skill.id == S_Dream22)) {
				event.skill.id = S_Dream12;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Dream12] = false; }, GLOBAL_LOCK_DELAY *3);
				fakeEnd_sorc_dist(event, S_Dream_D,0);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},25);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},50);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},75);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},100);
			}

			if (job == JOB_VALK && (event.skill.id == S_Shiny || event.skill.id == S_Shiny2)) {
				event.skill.id = S_Shiny;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Shiny] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[33] = true;
				var timer = setTimeout(function () { disabSkill[33] = false; },3000);
				fakeEnd_sorc_dist(event, S_Shiny_D,150);
				if(SHINING_LOCK){
					sclock = true;
					setTimeout(function(){sclock = false;}, SHINING_LOCK_DURATION);
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny3 || event.skill.id == S_Shiny4)) {
				event.skill.id = S_Shiny3;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Shiny3] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Shiny_D2,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny5 || event.skill.id == S_Shiny6)) {
				event.skill.id = S_Shiny5;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Shiny5] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[33] = true;
				var timer = setTimeout(function () { disabSkill[33] = false; },3000);
				fakeEnd_sorc_dist(event, S_Shiny_D,100);
				if(SHINING_LOCK){
					sclock = true;
					setTimeout(function(){sclock = false;}, SHINING_LOCK_DURATION);
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny7 || event.skill.id == S_Shiny8)) {
				event.skill.id = S_Shiny7;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Shiny7] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Shiny_D2,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Rag || event.skill.id == S_Rag2)) {
				event.skill.id = S_Rag;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Rag] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Rag_D,0);
				if (RAGNAROK_X) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Blood || event.skill.id == S_Blood2)) {
				event.skill.id = S_Blood;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Blood] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Blood_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Blood3 || event.skill.id == S_Blood4)) {
				event.skill.id = S_Blood3;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Blood3] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Blood_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == Roll || event.skill.id == Roll2)) {
				if (event.skill.id == Roll) {
					dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
						target: cid,
						source: cid,
						id: 10155020,
						duration: 4000,
						unk: 0,
						stacks: 1,
						unk2: 0,
						...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
					});
				}
				if (event.skill.id == Roll2) {
					dispatch.toClient('S_ABNORMALITY_END', 1, {
						target: cid,
						id: 10155020,
					});
				}
				event.skill.id = Roll;
				disabSkill[Roll] = true;
				var timer = setTimeout(function () { disabSkill[Roll] = false; }, S_Roll_D);
				fakeEnd_sorc_dist(event, S_Roll_D,100);
				clearTimeout(spinner);
				clearTimeout(spinner2);
				disabSkill[S_Spin12] = false;
				disabSkill[S_Spin13] = false;
				disabSkill[S_Spin] = false;
				disabSkill[S_Spin33] = false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Wind || event.skill.id == S_Wind2)) {
				event.skill.id = S_Wind;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Wind] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Wind_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Wind3 || event.skill.id == S_Wind4)) {
				event.skill.id = S_Wind3;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Wind3] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Wind_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Rune || event.skill.id == S_Rune2)) {
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 250, event);
				event.skill.id = S_Rune;
				disabSkill[S_Rune] = true;
				var timer = setTimeout(function () { disabSkill[S_Rune] = false; }, GLOBAL_LOCK_DELAY *4);
				disabSkill[S_Rune2] = true;
				var timer = setTimeout(function () { disabSkill[S_Rune2] = false; }, GLOBAL_LOCK_DELAY *4);
				fakeEnd_sorc_dist(event, S_Rune_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Rune3 || event.skill.id == S_Rune4)) {
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 250, event);
				event.skill.id = S_Rune3;
				disabSkill[S_Rune3] = true;
				var timer = setTimeout(function () { disabSkill[S_Rune3] = false; }, GLOBAL_LOCK_DELAY *4);
				disabSkill[S_Rune4] = true;
				var timer = setTimeout(function () { disabSkill[S_Rune4] = false; }, GLOBAL_LOCK_DELAY *4);
				fakeEnd_sorc_dist(event, S_Rune_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Tear)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Tear] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Tear_D,0);
				xloc = event.loc.x;
				yloc = event.loc.y;
				zloc = event.loc.z;
			}

			if (job == JOB_VALK && (event.skill.id == S_Recl || event.skill.id == S_Recl2)) {
				event.skill.id = S_Recl;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Recl] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Recl_D,0);
			}
			if (job == JOB_VALK && (event.skill.id == S_Dark) && edgeStack >0) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Dark] = false; }, GLOBAL_LOCK_DELAY *3);
				disabSkill[S_Dark2] = true;
				var timer = setTimeout(function () { disabSkill[S_Dark2] = false; }, GLOBAL_LOCK_DELAY *3);
				fakeEnd_sorc_dist(event, S_Dark_D,0);
				yoloToggle = true;
				xloc = event.loc.x;
				yloc = event.loc.y;
				zloc = event.loc.z;
			}
			if (job == JOB_VALK && (event.skill.id == S_Dark2) && edgeStack >0) {
				disabSkill[S_Dark] = true;
				var timer = setTimeout(function () { disabSkill[S_Dark] = false; }, GLOBAL_LOCK_DELAY *3);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Dark2] = false; }, GLOBAL_LOCK_DELAY *3);
				fakeEnd_sorc_dist(event, S_Dark_D,0);
				yoloToggle = true;
				xloc = event.loc.x;
				yloc = event.loc.y;
				zloc = event.loc.z;
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING22 || event.skill.id == S_CH_Rag3)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING22] = false; }, GLOBAL_LOCK_DELAY);
				var timer2 = setTimeout(function () { disabSkill[S_CH_Rag3] = false; }, GLOBAL_LOCK_DELAY);
				chargex = event.loc.x;
				chargey = event.loc.y;
				chargez = event.loc.z;
				if (lastSkill == SKILL_CHARGING || lastSkill == S_CH_Rag) {
					fakeEnd_sorc_dist(event, SKILL_CHARGING22_D,0);
				}
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING2 || event.skill.id == S_CH_Rag2)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING2] = false; }, GLOBAL_LOCK_DELAY);
				var timer2 = setTimeout(function () { disabSkill[S_CH_Rag2] = false; }, GLOBAL_LOCK_DELAY);
				chargex = event.loc.x;
				chargey = event.loc.y;
				chargez = event.loc.z;
				fakeEnd_sorc_dist(event, SKILL_CHARGING2_D,0);
			}

			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
			if ((lastSkill == S_Dark || lastSkill == S_Dark2) && DARK_RUNEBURST) {
				failsafe =0;
				repeater(RUNEBURST_KEY, lastSkill);
			}
			if ((lastSkill == S_Shiny || lastSkill == S_Shiny2 || lastSkill == S_Shiny5 || lastSkill == S_Shiny6) && SHINING_GUNGNIR) {
				failsafe =0;
				repeater(GUNGNIR_KEY, lastSkill);
			}
			if ((lastSkill == S_Shiny || lastSkill == S_Shiny2 || lastSkill == S_Shiny5 || lastSkill == S_Shiny6) && SHINING_DOUBLEHIT) {
				failsafe =0;
				repeater(SHINING_KEY, lastSkill);
			}
			if ((lastSkill == S_Leap || lastSkill == S_Leap2 || lastSkill == S_Leap12 || lastSkill == S_Leap22) && LEAPSLASH_INTO_GROUNDBASH) {
				failsafe =0;
				repeater(GROUNDBASH_KEY, lastSkill);
			}
		}
	});

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67119608);
		if (!enabled) return;
		if(event.gameId === cid) {
			var d = new Date();
			lastSkillTime[1] = d.getTime();
			lastSkillTime[3] = event.skill.id;
			var xzzy = event.skill.type ===1;
			if (!xzzy) {
				lastSkill =1;
			}
			if (job == JOB_VALK && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4 || event.skill.id == S_P13 || event.skill.id == S_P43)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_P12 || event.skill.id == S_P22 || event.skill.id == S_P32 || event.skill.id == S_P42)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_RETAL)) {
				if (Ignore1) {
					fakeEnd_sorc_dist(event, S_RETAL_D,0);
					lastSkill = S_RETAL;
				}
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_HALF_MOON || event.skill.id == (S_HALF_MOON +1) || event.skill.id == (S_HALF_MOON +2))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_HALF_MOON_RAG || event.skill.id == (S_HALF_MOON_RAG +1) || event.skill.id == (S_HALF_MOON_RAG +2))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_AGGRE || event.skill.id == (S_AGGRE +2) || event.skill.id == (S_AGGRE +3) || event.skill.id == (S_AGGRE +4))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_AGGRE_RAG || event.skill.id == (S_AGGRE_RAG +2) || event.skill.id == (S_AGGRE_RAG +3) || event.skill.id == (S_AGGRE_RAG +4))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_WARCRY || event.skill.id == (S_WARCRY +1) || event.skill.id == (S_WARCRY +2) || event.skill.id == (S_WARCRY +32) || event.skill.id == (S_WARCRY +3))) {
				if (event.skill.id != S_WARCRY && disabSkill["checker"] == false) {
					warcrystate = event; disabSkill[S_WARCRY_2] = true;
					var timer = setTimeout(function () { disabSkill[S_WARCRY_2] = false; }, GLOBAL_LOCK_DELAY *10); return;
				}
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING12)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_OHSlash || event.skill.id == S_OHSlash12 || event.skill.id == S_OHSlash2 || event.skill.id == S_OHSlash22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_GlaiveStrike || event.skill.id == S_GlaiveStrike12 || event.skill.id == S_GlaiveStrike2 || event.skill.id == S_GlaiveStrike22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Mael || event.skill.id == S_Mael2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Mael12 || event.skill.id == S_Mael22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Leap || event.skill.id == S_Leap2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Leap12 || event.skill.id == S_Leap22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Spin || event.skill.id == S_Spin2 || event.skill.id == S_Spin3 || event.skill.id == S_Spin13)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Spin12 || event.skill.id == S_Spin22 || event.skill.id == S_Spin32 || event.skill.id == S_Spin33)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Titan || event.skill.id == S_Titan13)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Titan12 || event.skill.id == S_Titan23)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_GroundB || event.skill.id == S_GroundB2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_GroundB12 || event.skill.id == S_GroundB22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Dream || event.skill.id == S_Dream2)) {
				clearTimeout(satan);
				disabSkill[666] = true;
				satan = setTimeout(function () { disabSkill[666] = false; }, 1500 / aspd);
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Dream12 || event.skill.id == S_Dream22)) {
				clearTimeout(satan);
				disabSkill[666] = true;
				satan = setTimeout(function () { disabSkill[666] = false; }, 1500 / aspd);
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny || event.skill.id == S_Shiny2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny3 || event.skill.id == S_Shiny4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny5 || event.skill.id == S_Shiny6)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny7 || event.skill.id == S_Shiny8)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Rag || event.skill.id == S_Rag2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Blood || event.skill.id == S_Blood2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Blood3 || event.skill.id == S_Blood4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Wind || event.skill.id == S_Wind2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Wind3 || event.skill.id == S_Wind4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Rune || event.skill.id == S_Rune2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == Roll || event.skill.id == Roll2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Rune3 || event.skill.id == S_Rune4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Tear)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Recl || event.skill.id == S_Recl2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_BS || event.skill.id == S_BS2)) {
				if (!DISABLE_BACKSTAB) {
					return false;
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Dark || event.skill.id == S_Dark2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_CH_Rag2 || event.skill.id == S_CH_Rag3)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING2 || event.skill.id == SKILL_CHARGING22 || event.skill.id == S_CH_Rag)) {
				return false;
			}
		}
	});

	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108232) console.log("error");
		if (!enabled) return;
		if(event.gameId === cid) {
			var d = new Date();
			lastSkillTime[2] = d.getTime();
			if (((lastSkillTime[2] - lastSkillTime[1]) > lastLastSkillDelay) && (event.skill.id == lastLastSkill || event.skill.id == lastLastSkill +30) && (lastLastSkill == lastSkillTime[3] || lastLastSkill == (lastSkillTime[3] -30))) {
				if (lastSkill !=0) {
					//clearTimeout(timer[lastSkill]);
				}
				RecheckTimer = setTimeout(function () {
					/*dispatch.toClient('S_ACTION_END', 5, lastSkillEvent);*/
				}, (lastSkillDelay + lastSkillStart - lastSkillTime[1] - lastLastSkillDelay));
			}
			if (job == JOB_VALK && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4 || event.skill.id == S_P13 || event.skill.id == S_P43)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_P12 || event.skill.id == S_P22 || event.skill.id == S_P32 || event.skill.id == S_P42)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_RETAL)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_HALF_MOON || event.skill.id == (S_HALF_MOON +1) || event.skill.id == (S_HALF_MOON +2))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_HALF_MOON_RAG || event.skill.id == (S_HALF_MOON_RAG +1) || event.skill.id == (S_HALF_MOON_RAG +2))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_AGGRE || event.skill.id == (S_AGGRE +2) || event.skill.id == (S_AGGRE +3) || event.skill.id == (S_AGGRE +4))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_AGGRE_RAG || event.skill.id == (S_AGGRE_RAG +2) || event.skill.id == (S_AGGRE_RAG +3) || event.skill.id == (S_AGGRE_RAG +4))) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_WARCRY || event.skill.id == (S_WARCRY +1) || event.skill.id == (S_WARCRY +2) || event.skill.id == (S_WARCRY +32) || event.skill.id == (S_WARCRY +3))) {
				//if (event.skill.id != S_WARCRY && disabSkill["checker"] == false && (lastSkill == S_WARCRY_2 || lastSkill == S_WARCRY)) { return; }
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_OHSlash || event.skill.id == S_OHSlash12 || event.skill.id == S_OHSlash2 || event.skill.id == S_OHSlash22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_GlaiveStrike || event.skill.id == S_GlaiveStrike12 || event.skill.id == S_GlaiveStrike2 || event.skill.id == S_GlaiveStrike22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Mael || event.skill.id == S_Mael2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Mael12 || event.skill.id == S_Mael22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Leap || event.skill.id == S_Leap2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Leap12 || event.skill.id == S_Leap22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Spin || event.skill.id == S_Spin2 || event.skill.id == S_Spin3 || event.skill.id == S_Spin13)) {
				//disabSkill[S_Spin] = false;
				//disabSkill[S_Spin13] = false;
				//disabSkill[S_Spin12] = false;
				//disabSkill[S_Spin33] = false;
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Spin12 || event.skill.id == S_Spin22 || event.skill.id == S_Spin32 || event.skill.id == S_Spin33)) {
				//disabSkill[S_Spin] = false;
				//disabSkill[S_Spin13] = false;
				//disabSkill[S_Spin12] = false;
				//disabSkill[S_Spin33] = false;
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Titan || event.skill.id == S_Titan13)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Titan12 || event.skill.id == S_Titan23)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_GroundB || event.skill.id == S_GroundB2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_GroundB12 || event.skill.id == S_GroundB22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == Roll || event.skill.id == Roll2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Dream || event.skill.id == S_Dream2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Dream12 || event.skill.id == S_Dream22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny || event.skill.id == S_Shiny2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny3 || event.skill.id == S_Shiny4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny5 || event.skill.id == S_Shiny6)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Shiny7 || event.skill.id == S_Shiny8)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Rag || event.skill.id == S_Rag2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Blood || event.skill.id == S_Blood2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Blood3 || event.skill.id == S_Blood4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Wind || event.skill.id == S_Wind2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Wind3 || event.skill.id == S_Wind4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Rune || event.skill.id == S_Rune2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Rune3 || event.skill.id == S_Rune4)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Tear)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_Recl || event.skill.id == S_Recl2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_BS || event.skill.id == S_BS2)) {
				if (!DISABLE_BACKSTAB) {
					return false;
				}
			}
			if (job == JOB_VALK && (event.skill.id == S_Dark || event.skill.id == S_Dark2)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING2 || event.skill.id == SKILL_CHARGING22)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == S_CH_Rag2 || event.skill.id == S_CH_Rag3)) {
				return false;
			}
			if (job == JOB_VALK && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING12 || event.skill.id == S_CH_Rag)) {
				if ((finish[SKILL_CHARGING] == false || finish[S_CH_Rag] == false)/* && lastSkill != SKILL_CHARGING && lastSkill != SKILL_CHARGING12 && lastSkill != S_CH_Rag*/) {
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						type: event.unk,
						id: atkid[event.skill.id],
					});
					finish[event.skill.id] = true;
				}
				return false;
			}
		}
	});

	dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
		if (!enabled) return;
		event.cooldown -= GLOBAL_LATENCY;
		if (event.skill.id == S_Spin3 || event.skill.id == S_Spin32) {
			spinCounter = false;
			spinCounter2 = false;
		}
		if (event.skill.id == S_Dream || event.skill.id == S_Dream22) {
			clearTimeout(satan);
			disabSkill[666] = false;
		}
		return true;
	});


	dispatch.hook('S_PLAYER_STAT_UPDATE', dispatch.majorPatchVersion >= 93 ? 14 : 13, (event) => {
		if (!enabled) return;
		aspd = (event.attackSpeed + event.attackSpeedBonus) / event.attackSpeed;
	});

	dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
		if (!enabled) return;
		xloc = event.dest.x;
		yloc = event.dest.y;
		zloc = event.dest.z;
		wloc = event.w;
		timeloc = event.time +1;
	});

	dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, (event) => {
		if (!enabled) return;
		xloc2 = event.loc.x;
		yloc2 = event.loc.y;
		zloc2 = event.loc.z;
		if (event.skill.id == S_OHSlash) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_OHSlash2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_WARCRY_2) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (S_WARCRY_2 +30),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (S_WARCRY_2 +1),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (S_WARCRY_2 +32),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_OHSlash12) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_OHSlash22,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_GlaiveStrike) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_GlaiveStrike2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_GlaiveStrike12) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_GlaiveStrike22,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Mael) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Mael2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Shiny) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Shiny2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Shiny3) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Shiny4,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Shiny5) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Shiny6,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Shiny7) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Shiny8,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Mael12) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Mael22,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Leap) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Leap2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Leap12) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Leap22,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Spin) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Spin13,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Spin12) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Spin33,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_GroundB) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_GroundB2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_GroundB) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_GroundB22,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Wind) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Wind2,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == S_Wind3) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: S_Wind4,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		setTimeout(function (event) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
			if (event.skill.id == S_OHSlash) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_OHSlash2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_OHSlash12) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_OHSlash22,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_GlaiveStrike) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_GlaiveStrike2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_GlaiveStrike12) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_GlaiveStrike22,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Mael) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Mael2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Shiny) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Shiny2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Shiny3) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Shiny4,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Shiny5) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Shiny6,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Shiny7) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Shiny8,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Mael12) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Mael22,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Leap) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Leap2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Leap12) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Leap22,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Spin) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Spin13,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Spin12) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Spin33,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_GroundB) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_GroundB2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_GroundB) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_GroundB22,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Wind) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Wind2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == S_Wind3) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_Wind4,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
		}, 100, event);
	});

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67119608);
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[S_RETAL] = true;
			Ignore1 = true;
		}
	});
	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108232) console.log("error");
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[S_RETAL] = false;
			clearTimeout(Ignore2);
			Ignore2 = setTimeout(function () { Ignore1 = false; },400);
		}
	});
};