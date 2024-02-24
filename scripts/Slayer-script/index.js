/*  SCRIPT BY SHIRA - Kishirika Kishirisu#6329  -class  | new upd 27.12.20*/
'use strict'

const JOB_SLAYER =2;

//Slayer skills

const S_KDS = 21101; //64
const S_KDS_2 =21102;
const S_KDS_D = 2844; //2385;// 2845; //3080;

const S_WW =31100;
const S_WW_D = 2872; //3100;

const S_Roll =40200;
const S_Roll2 =40230;
//const S_Roll_D =880;

const S_Dash =50300;
const S_Dash_D =700;

const S_Shout =70200;
const S_Shout_D =715;

const S_OHS = 81000; //chains from HT, KDS, WW, EVI, SB, Kick, Leaping
const S_OHS2 =81030;
const S_OHS_D =3365;

const S_UOHS = 250100; //starts with OHS ID
const S_UOHS2 =250130;
const S_UOHS_D =3365;

const S_LEAP =90800;
const S_LEAP_D =2191;
const S_LEAP_DIST =100;

const S_HT = 121100; //has SK glyph for fast HT x1.25
const S_HT_D =2333;

const S_SB =130900;
const S_SB_D =2133;

const S_KICK = 150800; //has self glyph x1.25
const S_KICK_D =1500;

const S_FURY =160400;
const S_FURY_D =1000;

const S_OP =180200;
const S_OP_D =1433;
const S_OP_BUFF =300330;

const S_TENA =190300;
const S_TENA_D1 =500;
const S_TENA_D2 =700;

const S_ICB = 200300; //unlocks UOHS
const S_ICB2 = 200310; // filler
const S_ICB3 =203200;
const S_ICB_D =1200;

const S_ELBOW =210100;
const S_ELBOW_D =1200;

const S_MS = 230900; //chains from OHS, EVI
const S_MS2 =230930;
const S_MS_D =3691;

const S_EVI = 240900; //chains from same as OHS
const S_EVI2 =240930;
const S_EVI_D =1941;

const S_RETAL =101000;
const S_RETAL_D =1630;

const S_P =11200;
const S_P2 =11201;
const S_P3 =11202;
const S_P4 =11203;
const S_P_D = 761; //845;
const S_P2_D =1021;
const S_P3_D =748;
const S_P4_D =1636;

const S_DB1 =140800;
const S_DB2 =140801;
const S_DB3 =140802;
const S_DB1_D =600;
const S_DB2_D =600;
const S_DB3_D =1500;

const S_BStab =60200;
const S_BStab_D =1340;


const SKILL_CHARGING =170300;
const SKILL_CHARGING_DISTANCE =494;
const SKILL_CHARGING_DURATION =990;

const S_Decimate =260100;
const S_Decimate_D1 =1094;
const S_Decimate_D2 =2166;
const S_Decimate_D3 =115;
const S_Decimate_DD1 =1700;
const S_Decimate_DD2 =25;

const S_BlazingT =270100;
const S_BlazingT_D1 = 990; //635;
const S_BlazingT_D2 = 1320; //990;
const S_BlazingT_D3 = 0; //1320;
const S_BlazingT_DD1 = 635; //970
const S_BlazingT_DD2 = 750; //1320
const S_BlazingT_2D =626;
const BLAZING_THRUST = 301603; //abnormality

const S_BIGSWORD =280100;
const S_BIGSWORD_D = 625; //510;
const S_BIGSWORD_DChain =330;
const S_BIGSWORD1 =280101;
const S_BIGSWORD2 =280102;
const S_BIGSWORD3 =280103;
const S_BIGSWORD_DD =1025;
const S_BIGSWORD_DD2 =20;

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
	111286, 111287, 111288, 111289, 111290, 111291, 111292, 111293, 111294, 111295, 111296, 111297, 111298, 111299, 111301, 111302, 111310, 111320, 111319, 111324, 111325, 111330, 111305, 111326, 111328, 111314, 111308, 111307, 111327];

module.exports = function slayer(dispatch) {

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
	let DISABLE_BACKSTAB_MOVE_PREDICTION = false;
	if (("DISABLE_BACKSTAB_MOVE_PREDICTION" in config)) {
		DISABLE_BACKSTAB_MOVE_PREDICTION = config.DISABLE_BACKSTAB_MOVE_PREDICTION;
	}
	if (!("DISABLE_BACKSTAB_MOVE_PREDICTION" in config)) {
		config.DISABLE_BACKSTAB_MOVE_PREDICTION = false;
		config.DISABLE_BACKSTAB_MOVE_PREDICTION_DESCRIPTION = "disables backstab movement spoofing. Backstab movement spoofing is faster but can be less accurate.";
		settingUpdate();
	}

	let OPALERT = true;
	if (("OPALERT" in config)) {
		OPALERT = config.OPALERT;
	}
	if (!("OPALERT" in config)) {
		config.OPALERT = true;
		config.OPALERT_DESCRIPTION = "Alerts you if OP is off";
		settingUpdate();
	}

	let ICB_BROOCH = false;
	if (("ICB_BROOCH" in config)) {
		ICB_BROOCH = config.ICB_BROOCH;
	}
	if (!("ICB_BROOCH" in config)) {
		config.ICB_BROOCH = false;
		config.ICB_BROOCH_DESCRIPTION = "Auto X_KEY when ICB is used. X_KEY must be set. This macro does not work without ROBOTJS.";
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

	let Y_KEY = "3";
	if (("Y_KEY" in config)) {
		Y_KEY = config.Y_KEY;
	}
	if (!("Y_KEY" in config)) {
		config.Y_KEY = "3";
		config.Y_KEY_DESCRIPTION = "Y Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}


	let Z_KEY = "3";
	if (("Z_KEY" in config)) {
		Z_KEY = config.Z_KEY;
	}
	if (!("Z_KEY" in config)) {
		config.Z_KEY = "3";
		config.Z_KEY_DESCRIPTION = "Z Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}


	let EVISC_OHS_PUNISH = false;
	if (("EVISC_OHS_PUNISH" in config)) {
		EVISC_OHS_PUNISH = config.EVISC_OHS_PUNISH;
	}
	if (!("EVISC_OHS_PUNISH" in config)) {
		config.EVISC_OHS_PUNISH = false;
		config.EVISC_OHS_PUNISH_DESCRIPTION = "Auto use punishing blow after OHS if the skill before it is eviscerate. This is used to override the default spacebar chain, as MS before punishing is suboptimal. This macro does not work without ROBOTJS.";
		settingUpdate();
	}

	let EVISC_OHS_PUNISH_DELAY = "50";
	if (("EVISC_OHS_PUNISH_DELAY" in config)) {
		EVISC_OHS_PUNISH_DELAY = config.EVISC_OHS_PUNISH_DELAY;
	}
	if (!("EVISC_OHS_PUNISH_DELAY" in config)) {
		config.EVISC_OHS_PUNISH_DELAY = "50";
		config.EVISC_OHS_PUNISH_DELAY_DESCRIPTION = "Delay before execution. Scales with ASPD.";
		settingUpdate();
	}

	let PUNISHING_KEY = "5";
	if (("PUNISHING_KEY" in config)) {
		PUNISHING_KEY = config.PUNISHING_KEY;
	}
	if (!("PUNISHING_KEY" in config)) {
		config.PUNISHING_KEY = "5";
		config.PUNISHING_KEY_DESCRIPTION = "Punishing blow Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let PUNISH_MS = false;
	if (("PUNISH_MS" in config)) {
		PUNISH_MS = config.PUNISH_MS;
	}
	if (!("PUNISH_MS" in config)) {
		config.PUNISH_MS = false;
		config.PUNISH_MS_DESCRIPTION = "Auto use MS after punishing blow. This macro does not work without ROBOTJS.";
		settingUpdate();
	}

	let MS_KEY = "6";
	if (("MS_KEY" in config)) {
		MS_KEY = config.MS_KEY;
	}
	if (!("MS_KEY" in config)) {
		config.MS_KEY = "6";
		config.MS_KEY_DESCRIPTION = "MS Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let HLR_BEFORE_WW = false;
	if (("HLR_BEFORE_WW" in config)) {
		HLR_BEFORE_WW = config.HLR_BEFORE_WW;
	}
	if (!("HLR_BEFORE_WW" in config)) {
		config.HLR_BEFORE_WW = false;
		config.HLR_BEFORE_WW_DESCRIPTION = "If you press WW while HLR is off CD, it will use HLR instead. This macro does not work without ROBOTJS.";
		settingUpdate();
	}

	let HLR_KEY = "3";
	if (("HLR_KEY" in config)) {
		HLR_KEY = config.HLR_KEY;
	}
	if (!("HLR_KEY" in config)) {
		config.HLR_KEY = "3";
		config.HLR_KEY_DESCRIPTION = "Headlong Rush key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let HLR_WW = false;
	if (("HLR_WW" in config)) {
		HLR_WW = config.HLR_WW;
	}
	if (!("HLR_WW" in config)) {
		config.HLR_WW = false;
		config.HLR_WW_DESCRIPTION = "Auto use WW after HLR. This macro does not work without ROBOTJS.";
		settingUpdate();
	}

	let WW_KEY = "9";
	if (("WW_KEY" in config)) {
		WW_KEY = config.WW_KEY;
	}
	if (!("WW_KEY" in config)) {
		config.WW_KEY = "9";
		config.WW_KEY_DESCRIPTION = "Whirlwind Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let KDSOHS = false;
	if (("KDSOHS" in config)) {
		KDSOHS = config.KDSOHS;
	}
	if (!("KDSOHS" in config)) {
		config.KDSOHS = false;
		config.KDSOHS_DESCRIPTION = "Auto OHS cancels KDS if OHS is available. UOHS_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}

	let UOHS_SPAM = false;
	if (("UOHS_SPAM" in config)) {
		UOHS_SPAM = config.UOHS_SPAM;
	}
	if (!("UOHS_SPAM" in config)) {
		config.UOHS_SPAM = false;
		config.UOHS_SPAM_DESCRIPTION = "Spam UOHS after Savage Strike during ICB. This macro does not work without ROBOTJS.";
		settingUpdate();
	}

	let UOHS_KEY = "4";
	if (("UOHS_KEY" in config)) {
		UOHS_KEY = config.UOHS_KEY;
	}
	if (!("UOHS_KEY" in config)) {
		config.UOHS_KEY = "4";
		config.UOHS_KEY_DESCRIPTION = "UOHS Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let SLAYER_HELPER = false;
	if (("SLAYER_HELPER" in config)) {
		SLAYER_HELPER = config.SLAYER_HELPER;
	}
	if (!("SLAYER_HELPER" in config)) {
		config.SLAYER_HELPER = false;
		config.SLAYER_HELPER_DESCRIPTION = "Alerts whether dash back crit bonus is currently active by faking a debuff.";
		settingUpdate();
	}

	let KDS_AUTO_OHS = false;
	let OHS_KEY = "4";
	let KDS_AUTO_OHS_ICB_ONLY = true;
	let UOHS_ACTIVATE_WHITE =800000;
	let UOHS_ACTIVATE_CRIT =6000000;
	let UOHS_DEACTIVATE_WHITE =550000;
	let UOHS_DEACTIVATE_CRIT =4500000;
	let ICB_HAX = false;
	let MS_AUTO_OP = false;
	let OP_KEY = "5";
	let ICB_AUTO_KDS = false;
	let KDS_KEY = "6";
	let SPOOF_GRANT = true;
	if (("SPOOF_GRANT" in config)) {
		SPOOF_GRANT = config.SPOOF_GRANT;
	}
	if (!("SPOOF_GRANT" in config)) {
		config.SPOOF_GRANT = true;
		config.SPOOF_GRANT_DESCRIPTION = "greatly speeds up charging skills, however may cause asynchronization with high jitter";
		settingUpdate();
	}


	let cid;
	let job;
	let model;
	let player;
	let enabled = false;
	let aspd;

	let atkid = [];
	let atkid_base = 0xFEFEFFEE;

	let savagecounter =0;

	let disabSkill = [];
	let startTime = [];
	let timer = [];
	let finishcheck = [];
	let finish = [];
	let delayfinish = [];
	let backstabActive = false;

	let ICBActive = false;
	let ICBActive2 = false;
	let kickHTActive = false;
	let furyWWActive = false;
	let msgSuppress;

	let punchCounter =0;
	let clearPunchCounter;

	let hlrlock = false;
	let hlr2;

	let APActive;
	let APState;
	let stallSorc =0; 
	let chargeSkillFix = [];
	let chargeSkillFix2;
	let chargeSkillIDx =0;
	let fastsword =1;
	let blockGrant = false;
	let blockGrant2;
	let sad1;
	let sad2;
	let kms;

	let Ignore1 = false;
	let Ignore2;

	let glyphState = [];

	let OPActive = false;

	let S_Roll_D =880;

	let npcLociX = [];
	let npcLociY = [];
	let npcLociZ = [];
	let npcLociW = [];

	let timer2;

	let hardlock = false;
	let hardlock2;

	let lastSkillTime = [];
	let lastSkillDelay;
	let lastLastSkill;
	let lastLastSkillDelay;
	let lastSkillStart;
	let lastSkillEvent;
	let RecheckTimer;

	let dashX = false;
	let dashY = false;
	let dashZ = false;

	let lastGrant;

	let yess4;

	let specialicb = false;

	let ICBLUL = true;
	let ICBToggle = KDS_AUTO_OHS;

	let time1;
	let time2;
	let time3;
	let time4;

	let BlazingThrust2 = false;

	let telex;
	let teley;
	let telez;
	let telew;

	let UOHSUOHS;

	let sand1;
	let sand2;

	let xloc;
	let yloc;
	let zloc;
	let wloc;
	let timeloc;

	let chainchain = false;
	let chainchain2;
	let chainchain3 = false;

	let realKDS;

	let kasper =0;

	let lastSkill =0;
	let lastEvent = { loc: 0n, skill: { id: S_P } };
	let lastEventTime;
	let GLOBAL_LOCK_DELAY = 250;//250
	let failsafe =0;

	var atkArr;

	let talentState = [];
	dispatch.hook('S_LOAD_EP_INFO', 2, (event) => {
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
			enabled = [JOB_SLAYER].includes(job);
		}
	});

	dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		cid = event.gameId;
		model = event.templateId;
		player = event.name;
		job = (model -10101) %100;
		enabled = [JOB_SLAYER].includes(job);
		var race = Math.floor((model -10101) /100);
		if (race ==8) {
			S_Roll_D =1190;
		}
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("disable2")) {
			enabled = false;
			console.log("Slayer script disabled");
			return false;
		}
		if (event.message.includes("enable2")) {
			enabled = [JOB_SLAYER].includes(job);
			console.log("Slayer script enabled if you are currently logged into slayer");
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
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
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
		delayfinish[event.skill.id] = false;
		setTimeout(function (event) { delayfinish[event.skill.id] = true; }, ((duration / aspd) +350), event);
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
		finish[SKILL_CHARGING] = true;
		dashX = false;
		dashY = false;
		dashZ = false;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
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
				effectScale: 1.0,
				moving: false,
				dest: { x: 0, y: 0, Z: 0 },
				target: 0n,
				animSeq: [],
			});
			dispatch.toClient('S_INSTANT_DASH', 3, {
				gameId: cid,
				target: 0n,
				unk: 0,
				loc: {
					x: event.dest.x,
					y: event.dest.y,
					z: event.dest.z
				},
				w: event.w,
			});
		},0);
		var zzzz = Math.pow((Math.pow((event.loc.x - event.dest.x),2) + Math.pow((event.loc.y - event.dest.y),2)), 0.5) / SKILL_CHARGING_DISTANCE * SKILL_CHARGING_DURATION +100;
		lastSkillDelay = zzzz;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: {
					x: event.dest.x,
					y: event.dest.y,
					z: event.dest.z
				},
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 39,
				id: atkid[event.skill.id],
			};
		}, zzzz, event);
		timer[event.skill.id] = setTimeout(function (event) {
			if (lastSkill == SKILL_CHARGING) {
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: dashX || event.dest.x,
						y: dashY || event.dest.y,
						z: dashZ || event.dest.z
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
	}

	dispatch.hook('S_CANNOT_START_SKILL', 4, { order: -999 }, (event) => {
		if (!enabled) return;
		if (event.skill.id === S_BStab) {
			return false;
		}
	});

	dispatch.hook('S_CREATURE_ROTATE', 2, (event) => {
		if (!enabled) { return }
		npcLociW[event.gameId] = event.w;
	});

	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) return;
		if (dispatch.parseSystemMessage(event.message).id == "SMT_SKILL_FAIL_CATEGORY") { return false };
	});

	function fakeEnd_AP(event, stage, xy, yy) {
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: event.loc.z
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: stage,
			speed: aspd,
			...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: (aspd * 1.1 + (fastsword -1) * 1.1) } : 0n),
			id: atkid[event.skill.id],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});
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
	}


	function fakeEnd_sorc_dist(event, duration, dist) {
		xloc = false;
		yloc = false;
		zloc = false;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		/*		if (event.skill.id == S_OHS && ICBActive == true) {
					event.skill.id = S_UOHS;
				}
				if (lastEvent != 'undefined' && lastEvent.skill.id == S_OHS && ICBActive == true) {
					lastEvent.skill.id = S_UOHS;
				}*/
		var yyy =1;
		if (event.skill.id == S_KICK && glyphState[23060] ==1) {
			yyy = 1.25;
		}
		if (event.skill.id == S_KICK && talentState[831530]) {
			yyy = yyy + (talentState[831530] * (10 /700) + 25 /700);
		}
		if ((event.skill.id == S_HT || event.skill.id == (S_HT +1) || event.skill.id == (S_HT +2)) && kickHTActive == true) {
			yyy = 1.25;
			kickHTActive = false;
		}
		if ((event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2)) && furyWWActive == true) {
			yyy = 1.25;
			furyWWActive = false;
		}
		if ((event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2)) && talentState[830310]) {
			yyy = yyy + (talentState[830310] * 5 / 700 + 50 /700);
		}
		var zzz =0;
		if ((event.skill.id == S_OHS || event.skill.id == S_UOHS) && ((chainchain && lastSkill != S_OHS && !ICBActive) || (chainchain /*&& ICBActive*/) || lastSkill == S_BlazingT || lastSkill == S_DB3 || lastSkill == S_FURY || lastSkill == S_HT || lastSkill == (S_HT +1) || lastSkill == (S_HT +2) || lastSkill == S_KDS || lastSkill == S_WW || lastSkill == (S_WW +1) || lastSkill == (S_WW +2) || lastSkill == S_EVI || lastSkill == S_SB || lastSkill == S_KICK || lastSkill == S_LEAP || lastSkill == S_P4) && finish[lastSkill] == false) {
			var zzz =30;
			duration =1331;
			force_endchain(lastEvent,4);
			finish[lastSkill] = true;
			clearTimeout(timer2);
			disabSkill[S_MS] = false;
		}//Iwashere
		if (event.skill.id == S_EVI && ((chainchain && event.skill.id != lastSkill) || lastSkill == S_BlazingT || lastSkill == S_OHS || lastSkill == S_UOHS || lastSkill == S_HT || lastSkill == (S_HT +1) || lastSkill == (S_HT +2) || lastSkill == S_KDS || lastSkill == S_WW || lastSkill == (S_WW +1) || lastSkill == (S_WW +2) || lastSkill == S_SB || lastSkill == S_KICK || lastSkill == S_LEAP || lastSkill == S_P4) && finish[lastSkill] == false) {
			var zzz =30;
			duration =1533;
			force_endchain(lastEvent,4);
			finish[lastSkill] = true;
			clearTimeout(timer2);
			disabSkill[S_MS] = false;
		}
		if (event.skill.id == S_Decimate && ((chainchain && event.skill.id != lastSkill) || lastSkill == S_OHS || lastSkill === S_UOHS || lastSkill == S_EVI || lastSkill == S_BlazingT || lastSkill == S_MS) && finish[lastSkill] == false) {
			var zzz =30;
			duration =1733;
			force_endchain(lastEvent,4);
			finish[lastSkill] = true;
			clearTimeout(timer2);
			disabSkill[S_MS] = false;
		}
		if (event.skill.id == S_BlazingT && (lastSkill == S_ICB || lastSkill == S_ICB2 || event.skill.id == S_ICB3 || lastSkill == S_RETAL || lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4 || lastSkill == S_BIGSWORD || lastSkill == S_BIGSWORD1 || lastSkill == S_BIGSWORD2 || lastSkill == S_BIGSWORD3 || lastSkill == S_HT || lastSkill == (S_HT +1) || lastSkill == (S_HT +2) || lastSkill == S_WW || lastSkill == (S_WW +1) || lastSkill == (S_WW +2) || lastSkill == S_KDS || lastSkill == S_OHS || lastSkill == S_UOHS || lastSkill == S_EVI || lastSkill == S_MS || lastSkill == S_Decimate || lastSkill == S_LEAP || lastSkill == S_SB || lastSkill == S_KICK || lastSkill == S_FURY || lastSkill == S_DB3 || lastSkill == S_Roll || lastSkill == S_Roll2 || lastSkill == SKILL_CHARGING) && finish[lastSkill] == false) {
			var zzz =30;
			force_endchain(lastEvent,4);
			finish[lastSkill] = true;
			clearTimeout(timer2);
			disabSkill[S_MS] = false;
		}
		if (event.skill.id == S_BlazingT && BlazingThrust2) {
			var zzz =31;
		}
		if (event.skill.id == S_MS && ((chainchain && event.skill.id != lastSkill) || lastSkill == S_BlazingT || lastSkill == S_OHS || lastSkill == S_UOHS || lastSkill == S_EVI || lastSkill == S_Decimate) && (finish[lastSkill] == false || delayfinish[lastSkill] == false)) {
			var zzz =30;
			duration =1660;
			force_endchain(lastEvent,4);
			finish[lastSkill] = true;
			clearTimeout(timer2);
		}
		if (event.skill.id == S_MS) {
			disabSkill[S_OHS] = true;
			disabSkill[S_UOHS] = true;
			setTimeout(function () { disabSkill[S_OHS] = false; }, duration / aspd);
			setTimeout(function () { disabSkill[S_UOHS] = false; }, duration / aspd);//thingtocheck
		}
		if ((event.skill.id == S_KDS || event.skill.id == S_KDS_2) && (lastSkill == S_DB1 || lastSkill == S_DB2 || lastSkill == S_DB3) && (finish[lastSkill] == false || delayfinish[lastSkill] == false)) {
			if (event.skill.id == S_KDS) {
				var zzz = 29; //30;
			}
			if (event.skill.id == S_KDS_2) {
				var zzz = 28; //30;
			}
			duration =2424;
			force_endchain(lastEvent,4);
			finish[lastSkill] = true;
			clearTimeout(timer2);
		}
		if (finish[lastSkill] == false && zzz ==0) {
			force_end(lastEvent,4);
			finish[lastSkill] = true;
		}
		if (event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3 || event.skill.id == S_Shout || event.skill.id == S_TENA || event.skill.id == S_Dash) {
			yyy = 1 / aspd;
		}
		finish[SKILL_CHARGING] = true;
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		if (event.skill.id == S_BlazingT) {
			if (zzz ==31) {
				savagecounter =2;
			}
			if (zzz !=31) {
				savagecounter =1;
			}
			clearTimeout(yess4);
			finish[99854] = false;
			yess4 = setTimeout(function () { finish[99854] = true; }, duration / aspd);
		}
		if (event.skill.id != S_BlazingT) {
			clearTimeout(yess4);
			finish[99854] = true;
		}

		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		atkid[event.skill.id + zzz] = atkid_base;
		atkid_base--;
		var vvv =0;
		var newX;
		var newY;
		var angle = parseFloat(event.w);

		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;
		if (event.skill.id == S_BlazingT) {
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
					x: event.loc.x + newX,
					y: event.loc.y + newY,
					z: event.loc.z + 2
				},
				target: 0n,
				animSeq: [],
			});
		}
		else {
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
				dest: { x: 0, y: 0, Z: 0 },
				target: 0n,
				animSeq: [],
			});
		}

		if (event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3 || event.skill.id == S_Shout || event.skill.id == S_TENA || event.skill.id == S_Dash) {
			yyy =1;
		}

		lastSkillDelay = duration / aspd;
		setTimeout(function () {
			if ((event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3 || event.skill.id == S_TENA) && xloc != false) {
				event.loc.x = xloc;
				event.loc.y = yloc;
				event.loc.z = zloc;
				event.w = wloc;
			}
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
		if (event.skill.id != S_BlazingT) {
			finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
		}
		if (event.skill.id == S_BlazingT) {
			finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd +1000), event);
		}
		/*if (lastSkill == S_BlazingT && chainchain && !chainchain3) {
			clearTimeout(chainchain2);
			chainchain2 = setTimeout(function () { chainchain = false; },4000);//1000?
		}*/
		delayfinish[event.skill.id] = false;
		setTimeout(function (event) { delayfinish[event.skill.id] = true; }, (duration / aspd), event);
		timer[event.skill.id] = setTimeout(
			function (event, zzz) {
				if (lastSkill ==1) { return; }
				if (event.skill.id == S_BlazingT && savagecounter == 2 && zzz !=31) {
					return;
				}
				if (lastSkill == S_BlazingT && event.skill.id != S_BlazingT) {
					return;
				}
				if (event.skill.id == S_BlazingT && lastSkill != S_BlazingT) {
					return;
				}
				if ((event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3 || event.skill.id == S_TENA) && xloc != false) {
					event.loc.x = xloc;
					event.loc.y = yloc;
					event.loc.z = zloc;
					event.w = wloc;
				}
				if (event.skill.id == S_LEAP) {
					xloc = false;
					yloc = false;
					zloc = false;
				}
				/*if (event.skill.id == S_BlazingT) {
					if (chainchain) {
						chainchain3 = true;
						clearTimeout(chainchain2);
						chainchain2 = setTimeout(function () { chainchain = false; },4000);//1000?
					}
				}*/
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
			}, duration / (aspd * yyy), event, zzz);
	}

	function fakeEnd_bs(event, duration) {
		if (DISABLE_BACKSTAB) { return; }
		telex = false;
		teley = false;
		telez = false;
		telew = false;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		if (finish[lastSkill] == false) {
			force_end(lastEvent,4);
		}
		finish[SKILL_CHARGING] = true;
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
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
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});
		backstabActive = true;

		if (event.targets[0].gameId !== 0n && !DISABLE_BACKSTAB_MOVE_PREDICTION) {
			dispatch.toClient('S_INSTANT_MOVE', 3, {
				gameId: cid,
				loc: {
					x: npcLociX[event.targets[0].gameId],
					y: npcLociY[event.targets[0].gameId],
					z: npcLociZ[event.targets[0].gameId]
				},
				w: npcLociW[event.targets[0].gameId],
			});
		}

		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
		lastSkillDelay = duration / aspd;
		setTimeout(function (event) {
			lastSkillEvent = {
				gameId: cid,
				loc: {
					x: telex || event.loc.x,
					y: teley || event.loc.y,
					z: telez || event.loc.z
				},
				w: telew || event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			};
		}, duration / aspd, event);
		timer[event.skill.id] = setTimeout(
			function (event) {
				backstabActive = false;
				if (lastSkill ==1) { return; }
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: telex || event.loc.x,
						y: teley || event.loc.y,
						z: telez || event.loc.z
					},
					w: telew || event.w,
					templateId: model,
					skill: event.skill.id,
					type: 0,
					id: atkid[event.skill.id],
				});
			}, duration / aspd, event);
	}

	dispatch.hook('S_INSTANT_MOVE', 3, (event) => {
		if (!enabled) { return };
		if (event.gameId === cid) {
			telex = event.loc.x;
			teley = event.loc.y;
			telez = event.loc.z;
			telew = event.w;
		}
	});

	dispatch.hook('S_NPC_LOCATION', 3, (event) => {
		if (!enabled) { return };
		npcLociX[event.gameId] = event.dest.x;
		npcLociY[event.gameId] = event.dest.y;
		npcLociZ[event.gameId] = event.dest.z;
		npcLociW[event.gameId] = event.w;
	});

	dispatch.hook('S_USER_LOCATION', 5, (event) => {
		if (!enabled) { return };
		npcLociX[event.gameId] = event.dest.x;
		npcLociY[event.gameId] = event.dest.y;
		npcLociZ[event.gameId] = event.dest.z;
		npcLociW[event.gameId] = event.w;
	});

	dispatch.hook('S_SPAWN_NPC', 12, (event) => {
		if (!enabled) { return };
		npcLociX[event.gameId] = event.loc.x;
		npcLociY[event.gameId] = event.loc.y;
		npcLociZ[event.gameId] = event.loc.z;
		npcLociW[event.gameId] = event.w;
	});

	dispatch.hook('S_SPAWN_USER', 16, (event) => {
		if (!enabled) { return };
		npcLociX[event.gameId] = event.loc.x;
		npcLociY[event.gameId] = event.loc.y;
		npcLociZ[event.gameId] = event.loc.z;
		npcLociW[event.gameId] = event.w;
	});


	dispatch.hook('S_CREST_INFO', 2, (event) => {
		if (!enabled) { return };
		event.crests.forEach(function (element) {
			glyphState[element.id] = element.enable;
		});
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("kdsohs")) {
			ICBToggle = !ICBToggle;
			console.log("KDS_AUTO_OHS is " + ICBToggle);
			return false;
		}
	});
	let chainchainTimeOut
	dispatch.hook('S_ABNORMALITY_BEGIN', 4, (event) => {
		if (!enabled) return;
		//if (event.id ==300502) { setTimeout(() => { hlrFix = true },100); }
		if (event.target !== cid) {
			return;
		}
		if (event.id == BLAZING_THRUST) {
			BlazingThrust2 = true;
		}
		if (event.id == S_OP_BUFF) {
			OPActive = true;
		}
		if (event.id ==301604) {
			//clearTimeout(chainchainTimeOut)
			//chainchainTimeOut = setTimeout(() => { chainchain = false },4000);
			chainchain = true;
		}
		if (event.id == 301603 && SLAYER_HELPER) {
			dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
				target: cid,
				source: cid,
				id: 47660400,
				duration: 5000,
				unk: 0,
				stacks: 1,
				unk2: 0,
				...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
			});
		}
		if (event.id == 301601 && SLAYER_HELPER) {
			dispatch.toClient('S_ABNORMALITY_BEGIN', 4, {
				target: cid,
				source: cid,
				id: 47660400,
				duration: 4000,
				unk: 0,
				stacks: 1,
				unk2: 0,
				...(dispatch.majorPatchVersion >= 75 ? { unk3: 0 } : 0n),
			});
		}
	});

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		//console.log(event)
		if (event.id ==301604) {
			chainchain = false;
		}
		if (event.id == BLAZING_THRUST) {
			BlazingThrust2 = false;
		}
		if (event.id == S_OP_BUFF) {
			OPActive = false;
		}
		if (event.id == 301603 && SLAYER_HELPER) {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
				target: cid,
				id: 47660400,
			});
		}
		if (event.id == 301601 && SLAYER_HELPER) {
			dispatch.toClient('S_ABNORMALITY_END', 1, {
				target: cid,
				id: 47660400,
			});
		}
	});

	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) { return };
		if ((event.message == '@2059' || event.message == '@36') && msgSuppress == event.message) {
			return false;
		}
		msgSuppress = event.message;
	});

	dispatch.hook('S_CREST_APPLY', 2, (event) => {
		if (!enabled) { return };
		glyphState[event.id] = event.enable;
	});

	let hlrFix = true;
	dispatch.hook('C_START_TARGETED_SKILL', 7, (event) => {
		if (!enabled) return;

		APState =0;

		if (finish[99854] == false && BlazingThrust2) {
			return false;
		}
		if (finish[S_OP] == false && event.skill.id == S_BStab) {
			return false;
		}

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			lastSkillDelay =999999;
			if (DISABLE_BACKSTAB == false || event.skill.id == SKILL_CHARGING) {
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },25);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },50);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },75);
				setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },100);
			}
			if (job == JOB_SLAYER && event.skill.id != S_P) {
				punchCounter =0;
			}
			if (job == JOB_SLAYER && event.skill.id == SKILL_CHARGING) {
				charge(event);
				hlrFix = false
				setTimeout(() => { hlrFix = true },150);
				//aspd = aspd + 0.6;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING] = false; }, GLOBAL_LOCK_DELAY);
				if (HLR_WW) {
					failsafe =0;
					lastSkill = SKILL_CHARGING;
					repeater(WW_KEY, SKILL_CHARGING);
				}
			}

			if (job == JOB_SLAYER && event.skill.id == S_BStab) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_BStab] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_bs(event, S_BStab_D);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
	});

	dispatch.hook('S_INSTANT_DASH', 3, (event) => {
		if (!enabled) return;
		if (event.gameId === cid) {
			return false;
		}
	});

	dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		if (event.target === cid) {
			if (event.reaction.enable == true) {
				lastSkill =1;
			}
		}
		/*if(event.source === cid){
		if(event.crit == 0 && ICB_HAX && (event.skill.id == S_UOHS || event.skill.id == S_UOHS2)){
		if(event.damage > UOHS_ACTIVATE_WHITE){
		ICBLUL = true;
		}
		if(event.damage < UOHS_DEACTIVATE_WHITE){
		ICBLUL = false;
		}
		}
		if(event.crit == 1 && ICB_HAX && (event.skill.id == S_UOHS || event.skill.id == S_UOHS2)){
		if(event.damage > UOHS_ACTIVATE_CRIT){
		ICBLUL = true;
		}
		if(event.damage < UOHS_DEACTIVATE_CRIT){
		ICBLUL = false;
		}
		}
		}*/
	});

	dispatch.hook('C_START_COMBO_INSTANT_SKILL', 6, (event) => {
		if (!enabled) return;

		APState =0;

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			lastSkillDelay =999999;
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },25);
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },50);
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },75);
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },100);
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },125);
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },150);
			setTimeout(function () { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); },170);
			if (job == JOB_SLAYER && event.skill.id != S_P) {
				punchCounter =0;
			}
			if (job == JOB_SLAYER && event.skill.id == S_DB1) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_DB1] = false; }, GLOBAL_LOCK_DELAY *2);
				fakeDB(event, S_DB1_D);
			}
			if (job == JOB_SLAYER && event.skill.id == S_DB2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_DB2] = false; }, GLOBAL_LOCK_DELAY *2);
				fakeDB(event, S_DB2_D);
			}
			if (job == JOB_SLAYER && event.skill.id == S_DB3) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_DB3] = false; }, GLOBAL_LOCK_DELAY *2);
				disabSkill[S_MS] = true;
				setTimeout(function () { disabSkill[S_MS] = false; }, S_DB3_D / aspd);
				disabSkill[S_EVI] = true;
				setTimeout(function () { disabSkill[S_EVI] = false; }, S_DB3_D / aspd);
				fakeDB(event, S_DB3_D);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}

	});

	dispatch.hook('C_START_INSTANCE_SKILL', 7, (event) => {
		if (!enabled) return;

		APState =0;

		if (finish[99854] == false && BlazingThrust2) {
			return false;
		}

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			lastSkillDelay =999999;
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },25);
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },50);
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },75);
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },100);
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },125);
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },150);
			setTimeout(function () { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); },170);
			if (job == JOB_SLAYER && event.skill.id != S_P) {
				punchCounter =0;
			}
			if (job == JOB_SLAYER && event.skill.id == S_ELBOW) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_ELBOW] = false; }, GLOBAL_LOCK_DELAY);
				fakeDB(event, S_ELBOW_D);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
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

	dispatch.hook('S_CANNOT_START_SKILL', 4, (event) => {
		if (!enabled) { return };
		if (event.skill.id == (S_BlazingT)) {
			dispatch.toServer('C_START_SKILL', 7, lastEvent);
		}
	});

	function grantskill(xskill) {
		if (!SPOOF_GRANT) {
			return;
		}
		if (disabSkill[666]) {
			//return;
		}
		clearTimeout(blockGrant2);
		blockGrant = true;
		blockGrant2 = setTimeout(function () { blockGrant = false; },590);
		dispatch.toClient('S_GRANT_SKILL', 3, {
			skill: xskill,
		});
		lastGrant = xskill;
	}

	dispatch.hook('S_GRANT_SKILL', 3, (event) => {
		if (!enabled) { return };
		if (blockGrant && event.skill.id == lastGrant) {
			return false; //check res
		}
	});

	dispatch.hook('C_PRESS_SKILL', 4, (event) => {
		if (!enabled) return;
		if (!disabSkill[event.skill.id]) {
			if (APActive == 1 && event.press == true) {
				return false;
			}
			lastSkillDelay =999999;
			if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD) {
				APActive = event.press;
			}
			if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD && event.press == false) {
				finish[S_BIGSWORD] = true;
				clearTimeout(sad1);
				clearTimeout(sad2);
				grantskill((event.skill.id + APState));
				if (stallSorc >10) {
					//console.log('attempt unstuck');
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: S_BIGSWORD,
						type: 0,
						id: atkid[S_BIGSWORD],
					});
				}
				stallSorc = stallSorc +1;
			}
			if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD && APActive ==1) {
				finish[S_BIGSWORD] = false;
				clearTimeout(kms);
				disabSkill[666] = true;
				kms = setTimeout(function () { disabSkill[666] = false; },500);
				//setTimeout(function(){if(APActive ==1){dispatch.toServer('C_PRESS_SKILL', 4, event);}},50);
				//setTimeout(function(){if(APActive ==1){dispatch.toServer('C_PRESS_SKILL', 4, event);}},100);
				//setTimeout(function(){if(APActive ==1){dispatch.toServer('C_PRESS_SKILL', 4, event);}},150);
				//setTimeout(function(){if(APActive ==1){dispatch.toServer('C_PRESS_SKILL', 4, event);}},200);
				chargeSkillFix[chargeSkillIDx] = setInterval(function (event, nnn) {
					if ((event.skill.id == S_BIGSWORD) && lastSkill == event.skill.id && event.press == true && chargeSkillFix2 != lastSkill) {
						//dispatch.toServer('C_PRESS_SKILL', 4, event);
					}
					if (chargeSkillFix2 == lastSkill) {
						clearInterval(chargeSkillFix[nnn]);
					}
					if (event.skill.id == S_BIGSWORD && APActive ==0) {
						clearInterval(chargeSkillFix[nnn]);
					}
				}, 100, event, chargeSkillIDx);
				chargeSkillIDx++;
				fakeEnd_AP(event, 0, event.loc.x, event.loc.y);
				APState =1;
				stallSorc =0;
				fastsword =1;
				clearTimeout(sad1);
				clearTimeout(sad2);
				if (chainchain && BlazingThrust2 == false) {
					fastsword = 1.6;
				}
				if (chainchain && BlazingThrust2 == true) {
					fastsword = 1.4;
				}
				xloc = event.loc.x;
				yloc = event.loc.y;
				sad1 = setTimeout(function (event) {
					if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD && APActive == 1 && APState ==1) {
						fakeEnd_AP(event, 1, xloc, yloc);
						APState =2;
						sad2 = setTimeout(function (event) {
							if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD && APActive == 1 && APState ==2) {
								fakeEnd_AP(event, 2, xloc, yloc);
								APState =3;
							}
						}, S_BIGSWORD_D / (aspd * 1.1 + (fastsword -1) * 1.1), event);
					}
				}, S_BIGSWORD_D / (aspd * 1.1 + (fastsword -1) * 1.1), event);
			}
			if (event.press == true) {
				lastLastSkill = lastSkill;
				lastSkill = event.skill.id;
				lastEvent = event;
				clearTimeout(blockGrant2);
				blockGrant = false;
			}
		}
	});

	let ohsgodInterval, ohsgodTimeout
	function ohsgod() {
		var robot19 = require("robotjs");
		dispatch.clearInterval(ohsgodInterval)
		dispatch.clearTimeout(ohsgodTimeout)
		ohsgodInterval = dispatch.setInterval(() => {
			robot19.keyTap(UOHS_KEY);
		},50);
		ohsgodTimeout = dispatch.setTimeout(function () { dispatch.clearInterval(ohsgodInterval); },900);
		/*if (lastSkill == S_OHS || lastSkill == S_BlazingT || lastSkill == S_UOHS) {
			setTimeout(function () { ohsgod(); },50);
		}*/
	}


	dispatch.hook('C_START_SKILL', 7, (event) => {
		if (!enabled) return;
		lastSkillDelay =999999;

		APState =0;
		lastEvent.loc = event.loc;

		if (event.skill.id == S_KDS_2 || event.skill.id == (S_KDS -1) || event.skill.id == S_KDS) {
			realKDS = event;
			event.skill.id = S_KDS;
		}
		if (event.skill.id == S_ICB) { specialicb = false }

		if (event.skill.id == S_ICB2 || event.skill.id == S_ICB3) { specialicb = true; }

		if (event.skill.id == S_KDS && (lastSkill != S_OP && lastSkill != S_TENA && lastSkill != S_Dash && lastSkill != S_ICB && lastSkill != S_ICB2 && lastSkill != S_ICB3 && lastSkill != 0 && finish[lastSkill] == false && lastSkill != S_DB1 && lastSkill != S_DB2 && lastSkill != S_DB3)) {
			if (!(lastSkill == S_BlazingT/* && !BlazingThrust2*/)) {
				return false;
			}
		}

		if (event.skill.id == S_BlazingT && disabSkill[S_BlazingT]) {
			return false;
		}

		if (event.skill.id == S_OHS && hardlock) {
			return false;
		}
		if ([S_WW, S_WW + 1, S_WW + 2].includes(event.skill.id) && !hlrFix) { return false }

		if ((/*event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2) || event.skill.id == S_HT || event.skill.id == (S_HT +1) || event.skill.id == (S_HT +2) || event.skill.id == S_KDS || */event.skill.id == S_Dash || event.skill.id == S_Shout || event.skill.id == S_OP || event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3 || event.skill.id == S_FURY || event.skill.id == S_KICK || event.skill.id == S_SB || event.skill.id == S_LEAP || event.skill.id == S_Roll) && finish[99854] == false && BlazingThrust2) {
			return false;
		}

		if ((lastSkill == S_BIGSWORD1 || lastSkill == S_BIGSWORD2 || lastSkill == S_BIGSWORD3) && event.skill.id != S_BIGSWORD1 && event.skill.id != S_BIGSWORD2 && event.skill.id != S_BIGSWORD3 && event.skill.id != S_Roll && event.skill.id != S_Roll2 && event.skill.id != S_BlazingT && event.skill.id != S_OHS && finish[lastSkill] == false) {
			return false;
		}

		if (lastSkill == S_Decimate && finish[lastSkill] == false && !chainchain && (event.skill.id == S_EVI || event.skill.id == S_OHS)) {
			return false;
		}

		if (lastSkill == S_MS && finish[lastSkill] == false && !chainchain && (event.skill.id == S_EVI || event.skill.id == S_OHS)) {
			return false;
		}

		if (backstabActive && event.skill.id == S_MS) {
			return false;
		}

		//if (event.skill.id !== S_OHS && event.skill.id !== S_BlazingT) { dispatch.clearInterval(ohsgodInterval); dispatch.clearTimeout(ohsgodTimeout) }

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if ((!disabSkill[event.skill.id] || chainchain) && (finish[SKILL_CHARGING] != false || event.skill.id == S_KDS || event.skill.id == S_Roll || event.skill.id == S_BlazingT)) {
			msgSuppress =0;

			if ((event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2)) && !hlrlock && HLR_BEFORE_WW) {
				failsafe =0;
				repeater(HLR_KEY, lastSkill);
				return false;
			}

			var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
			if (xzzy && event.skill.id != S_RETAL && event.skill.id != S_KDS && event.skill.id != S_OHS) {
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_ICB && event.skill.id != S_ICB2 && event.skill.id != S_ICB3 && event.skill.id != S_OP && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_ICB && event.skill.id != S_ICB2 && event.skill.id != S_ICB3 && event.skill.id != S_OP && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_ICB && event.skill.id != S_ICB2 && event.skill.id != S_ICB3 && event.skill.id != S_OP && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 125, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_ICB && event.skill.id != S_ICB2 && event.skill.id != S_ICB3 && event.skill.id != S_OP && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill && event.skill.id != S_ICB && event.skill.id != S_ICB2 && event.skill.id != S_ICB3 && event.skill.id != S_OP && event.skill.id != S_BlazingT) { dispatch.toServer('C_START_SKILL', 7, event); } }, 170, event);
			}
			if (event.skill.id == S_KDS) {
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },25);
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },50);
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },75);
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },100);
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },125);
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },150);
				setTimeout(function () { if (S_KDS == lastSkill) { dispatch.toServer('C_START_SKILL', 7, realKDS); } },170);
			}
			if (job == JOB_SLAYER && event.skill.id != S_P) {
				punchCounter =0;
			}
			if (job == JOB_SLAYER && event.skill.id == S_P) {
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
				}
			}

			if (job == JOB_SLAYER && event.skill.id == S_P) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_D);
				disabSkill[S_EVI] = true;
				var timer3 = setTimeout(function () { disabSkill[S_EVI] = false; }, S_P_D / aspd);
			}

			if (job == JOB_SLAYER && event.skill.id == S_P2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P2] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P2_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D);
				disabSkill[S_EVI] = true;
				var timer3 = setTimeout(function () { disabSkill[S_EVI] = false; }, S_P2_D / aspd);
			}
			if (job == JOB_SLAYER && event.skill.id == S_P3) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P3] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P3_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D);
				disabSkill[S_EVI] = true;
				var timer3 = setTimeout(function () { disabSkill[S_EVI] = false; }, S_P3_D / aspd);
			}
			if (job == JOB_SLAYER && event.skill.id == S_P4) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P4] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P4_D);
				clearTimeout(clearPunchCounter);
				punchCounter =0;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P4_D);
			}

			if (job == JOB_SLAYER && event.skill.id == S_Decimate) {
				disabSkill[event.skill.id] = true;
				if (((chainchain && event.skill.id != lastSkill) || lastSkill == S_OHS || lastSkill === S_UOHS || lastSkill == S_EVI || lastSkill == S_BlazingT || lastSkill == S_MS) && finish[lastSkill] == false) {
					setTimeout(function () { disabSkill[S_Decimate] = false; }, (S_Decimate_DD1 + S_Decimate_DD2) / aspd);
					if (lastSkill == S_BlazingT && BlazingThrust2) {
						disabSkill[999] = true;
						setTimeout(function () { disabSkill[999] = false; }, (S_Decimate_DD1 + S_Decimate_DD2));
					}
					setTimeout(function (event) {
						if (lastSkill != S_Decimate) { return; }
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id + 30,
							stage: 1,
							speed: aspd,
							...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
							id: atkid[(event.skill.id +30)],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, S_Decimate_DD1 / aspd, event);
				}
				else if (finish[lastSkill] == false) {
					disabSkill[S_Decimate] = false;
					return false;
				}
				else {
					setTimeout(function () { disabSkill[S_Decimate] = false; }, (S_Decimate_D1 + S_Decimate_D2 + S_Decimate_D3) / aspd);
					setTimeout(function (event) {
						if (lastSkill != S_Decimate) { return; }
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: aspd,
							...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
							id: atkid[(event.skill.id)],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (S_Decimate_D1) / aspd, event);
					setTimeout(function (event) {
						if (lastSkill != S_Decimate) { return; }
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 2,
							speed: aspd,
							...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
							id: atkid[(event.skill.id)],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (S_Decimate_D1 + S_Decimate_D2) / aspd, event);
				}
				fakeEnd_sorc_dist(event, (S_Decimate_D1 + S_Decimate_D2 + S_Decimate_D3));
				if (PUNISH_MS) {
					failsafe =0;
					lastSkill = S_Decimate;
					repeater(MS_KEY, S_Decimate);
				}
			}

			if (job == JOB_SLAYER && event.skill.id == S_BlazingT) {
				xloc = false;
				yloc = false;
				zloc = false;
				chainchain3 = false;
				/*if (chainchain == false) {
					clearTimeout(chainchain2);
					chainchain = true;
					chainchain2 = setTimeout(function () { chainchain = false; },5000);//4000
				}*/
				clearTimeout(sand1);
				clearTimeout(sand2);
				disabSkill[event.skill.id] = true;
				if (BlazingThrust2) {
					fakeEnd_sorc_dist(event, S_BlazingT_2D,230);
					BlazingThrust2 = false;
				}
				else if ((lastSkill == S_ICB || lastSkill == S_ICB2 || event.skill.id == S_ICB3 || lastSkill == S_RETAL || lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4 || lastSkill == S_BIGSWORD || lastSkill == S_BIGSWORD1 || lastSkill == S_BIGSWORD2 || lastSkill == S_BIGSWORD3 || lastSkill == S_HT || lastSkill == (S_HT +1) || lastSkill == (S_HT +2) || lastSkill == S_WW || lastSkill == (S_WW +1) || lastSkill == (S_WW +2) || lastSkill == S_KDS || lastSkill == S_OHS || lastSkill == S_UOHS || lastSkill == S_EVI || lastSkill == S_MS || lastSkill == S_Decimate || lastSkill == S_LEAP || lastSkill == S_SB || lastSkill == S_KICK || lastSkill == S_FURY || lastSkill == S_DB3 || lastSkill == S_Roll || lastSkill == S_Roll2 || lastSkill == SKILL_CHARGING) && finish[lastSkill] == false) {
					fakeEnd_sorc_dist(event, (S_BlazingT_DD1 + S_BlazingT_DD2),230);
					BlazingThrust2 = true;

					sand1 = setTimeout(function (event) {
						if (lastSkill != S_BlazingT || !BlazingThrust2) { return; }
						var newX;
						var newY;
						var angle = parseFloat(event.w);

						newX = Math.cos(angle) *230;
						newY = Math.sin(angle) *230;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: {
								x: xloc || event.loc.x + newX,
								y: yloc || event.loc.y + newY,
								z: zloc || event.loc.z + 2
							},
							w: event.w,
							templateId: model,
							skill: event.skill.id + 30,
							stage: 1,
							speed: aspd,
							...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
							id: atkid[(event.skill.id +30)],
							effectScale: 1.0,
							moving: false,
							dest: {
								x: xloc || event.loc.x + newX,
								y: yloc || event.loc.y + newY,
								z: zloc || event.loc.z + 2
							},
							target: 0n,
							animSeq: [],
						});
					}, S_BlazingT_DD1 / aspd, event);

				}
				else {
					//fakeEnd_sorc_dist(event, (S_BlazingT_D1 + S_BlazingT_D2 + S_BlazingT_D3),230);
					fakeEnd_sorc_dist(event, (S_BlazingT_DD1 + S_BlazingT_DD2),230);
					BlazingThrust2 = true;

					sand1 = setTimeout(function (event) {
						if (lastSkill != S_BlazingT || !BlazingThrust2) { return; }
						var newX;
						var newY;
						var angle = parseFloat(event.w);

						newX = Math.cos(angle) *230;
						newY = Math.sin(angle) *230;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: {
								x: xloc || event.loc.x + newX,
								y: yloc || event.loc.y + newY,
								z: zloc || event.loc.z + 2
							},
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 1,
							speed: aspd,
							...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
							id: atkid[(event.skill.id)],
							effectScale: 1.0,
							moving: false,
							dest: {
								x: xloc || event.loc.x + newX,
								y: yloc || event.loc.y + newY,
								z: zloc || event.loc.z + 2
							},
							target: 0n,
							animSeq: [],
						});
					}, (S_BlazingT_D1) / aspd, event);

					/*sand2 = setTimeout(function (event) {
						if (lastSkill != S_BlazingT) { return; }
						var newX;
						var newY;
						var angle = parseFloat(event.w);

						newX = Math.cos(angle) *230;
						newY = Math.sin(angle) *230;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: {
								x: xloc || event.loc.x + newX,
								y: yloc || event.loc.y + newY,
								z: zloc || event.loc.z + 2
							},
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 2,
							speed: aspd,
							...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
							id: atkid[(event.skill.id)],
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}, (S_BlazingT_D1 + S_BlazingT_D2) / aspd, event);*/
				}
				if (BlazingThrust2) {
					var timer = setTimeout(function () { disabSkill[S_BlazingT] = false; }, 0 / aspd);
				}
				if (!BlazingThrust2) {
					var timer = setTimeout(function () { disabSkill[S_BlazingT] = false; }, S_BlazingT_2D / aspd +1000);
				}
			}
			if (UOHS_SPAM && ICBActive && event.skill.id == S_BlazingT) {
				lastSkill = S_BlazingT;
				ohsgod();
			}

			if (job == JOB_SLAYER && event.skill.id == S_KDS) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_KDS] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				timer2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_KDS_D / aspd);
				fakeEnd_sorc_dist(event, S_KDS_D,100);
				/*if (ICBToggle && KDS_AUTO_OHS_ICB_ONLY && ICBActive && ICBLUL) {
					failsafe =0;
					lastSkill = S_KDS;
					repeater(OHS_KEY, S_KDS);
				}*/
				if (KDSOHS) {
					failsafe =0;
					lastSkill = S_KDS;
					repeater(UOHS_KEY, S_KDS);
				}
			}
			if (job == JOB_SLAYER && (event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2))) {
				disabSkill[S_WW] = true;
				var timer = setTimeout(function () { disabSkill[S_WW] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[(S_WW +1)] = true;
				var timer9 = setTimeout(function () { disabSkill[(S_WW +1)] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[(S_WW +2)] = true;
				var timer90 = setTimeout(function () { disabSkill[(S_WW +2)] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				timer2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_WW_D / aspd);
				setTimeout(function (event) { if (event.skill.id == lastSkill) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				setTimeout(function (event) { if (event.skill.id == lastSkill) { dispatch.toServer('C_START_SKILL', 7, event); } }, 250, event);
				fakeEnd_sorc_dist(event, S_WW_D,0);
			}
			if (job == JOB_SLAYER && event.skill.id == S_Roll) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Roll] = false; }, (S_Roll_D / aspd -100));
				clearTimeout(time1);
				clearTimeout(time2);
				clearTimeout(time3);
				clearTimeout(time4);
				disabSkill[S_OHS] = true;
				time1 = setTimeout(function () { disabSkill[S_OHS] = false; }, S_Roll_D / aspd);
				disabSkill[S_MS] = true;
				time2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_Roll_D / aspd);
				disabSkill[S_EVI] = true;
				time3 = setTimeout(function () { disabSkill[S_EVI] = false; }, S_Roll_D / aspd);
				disabSkill[S_HT] = true;
				time4 = setTimeout(function () { disabSkill[S_HT] = false; }, S_Roll_D / aspd);
				fakeEnd_sorc_dist(event, S_Roll_D,150);
			}
			if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD1) {
				disabSkill[S_BIGSWORD1] = true;
				var timer1 = setTimeout(function () { disabSkill[S_BIGSWORD1] = false; }, 2000 / aspd);
				disabSkill[S_BIGSWORD2] = true;
				var timer2 = setTimeout(function () { disabSkill[S_BIGSWORD2] = false; }, 2000 / aspd);
				disabSkill[S_BIGSWORD3] = true;
				var timer3 = setTimeout(function () { disabSkill[S_BIGSWORD3] = false; }, 2000 / aspd);
				fakeEnd_sorc_dist(event, (S_BIGSWORD_DD + S_BIGSWORD_DD2),0);
				APState =0;
				setTimeout(function (event) {
					if (lastSkill != S_BIGSWORD1 && lastSkill != S_BIGSWORD2 && lastSkill != S_BIGSWORD3) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd,
						...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
						id: atkid[(event.skill.id)],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}, S_BIGSWORD_DD / aspd, event);
			}
			if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD2) {
				disabSkill[S_BIGSWORD1] = true;
				var timer1 = setTimeout(function () { disabSkill[S_BIGSWORD1] = false; }, 2000 / aspd);
				disabSkill[S_BIGSWORD2] = true;
				var timer2 = setTimeout(function () { disabSkill[S_BIGSWORD2] = false; }, 2000 / aspd);
				disabSkill[S_BIGSWORD3] = true;
				var timer3 = setTimeout(function () { disabSkill[S_BIGSWORD3] = false; }, 2000 / aspd);
				fakeEnd_sorc_dist(event, (S_BIGSWORD_DD + S_BIGSWORD_DD2),0);
				APState =0;
				setTimeout(function (event) {
					if (lastSkill != S_BIGSWORD1 && lastSkill != S_BIGSWORD2 && lastSkill != S_BIGSWORD3) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd,
						...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
						id: atkid[(event.skill.id)],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}, S_BIGSWORD_DD / aspd, event);
			}
			if (job == JOB_SLAYER && event.skill.id == S_BIGSWORD3) {
				disabSkill[S_BIGSWORD1] = true;
				var timer1 = setTimeout(function () { disabSkill[S_BIGSWORD1] = false; }, 2000 / aspd);
				disabSkill[S_BIGSWORD2] = true;
				var timer2 = setTimeout(function () { disabSkill[S_BIGSWORD2] = false; }, 2000 / aspd);
				disabSkill[S_BIGSWORD3] = true;
				var timer3 = setTimeout(function () { disabSkill[S_BIGSWORD3] = false; }, 2000 / aspd);
				fakeEnd_sorc_dist(event, (S_BIGSWORD_DD + S_BIGSWORD_DD2),0);
				APState =0;
				setTimeout(function (event) {
					if (lastSkill != S_BIGSWORD1 && lastSkill != S_BIGSWORD2 && lastSkill != S_BIGSWORD3) { return; }
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 1,
						speed: aspd,
						...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
						id: atkid[(event.skill.id)],
						effectScale: 1.0,
						moving: false,
						dest: { x: 0, y: 0, Z: 0 },
						target: 0n,
						animSeq: [],
					});
				}, S_BIGSWORD_DD / aspd, event);
			}
			if (job == JOB_SLAYER && event.skill.id == S_Dash) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Dash] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Dash_D,0);
			}
			if (job == JOB_SLAYER && event.skill.id == S_Shout) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_Shout] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_Shout_D,0);
			}
			if (job == JOB_SLAYER && event.skill.id == S_OHS && ((finish[S_OHS] != false/* && finish[S_UOHS] != false*/) || (chainchain /*&& ICBActive*/))) {//Iwashere
				for (var i = 0; i < 10; i++) { clearTimeout(hardlock2); }
				hardlock = true;
				setTimeout(() => { hardlock2 = setTimeout(function () { hardlock = false; },490); },5);
				//if (!(chainchain && ICBActive) || 1 ==1) { // this is always true anyways I guess?
				disabSkill[event.skill.id] = true;
				//}
				var timer = setTimeout(function () { disabSkill[S_OHS] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_OHS_D,0);
				if (EVISC_OHS_PUNISH && lastSkill == S_EVI) {
					setTimeout(function () {
						failsafe =0;
						lastSkill = S_OHS;
						repeater(PUNISHING_KEY, S_OHS);
					}, EVISC_OHS_PUNISH_DELAY / aspd);
				}
			}
			if (job == JOB_SLAYER && event.skill.id == S_LEAP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_LEAP] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				timer2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_LEAP_D / aspd);
				fakeEnd_sorc_dist(event, S_LEAP_D, S_LEAP_DIST);
			}
			if (job == JOB_SLAYER && (event.skill.id == S_HT || event.skill.id == (S_HT +1) || event.skill.id == (S_HT +2))) {
				disabSkill[S_HT] = true;
				var timer = setTimeout(function () { disabSkill[S_HT] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[(S_HT +1)] = true;
				var timer99 = setTimeout(function () { disabSkill[(S_HT +1)] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[(S_HT +2)] = true;
				var timer990 = setTimeout(function () { disabSkill[(S_HT +2)] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				timer2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_HT_D / aspd);
				fakeEnd_sorc_dist(event, S_HT_D,100);
			}
			if (job == JOB_SLAYER && event.skill.id == S_SB) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_SB] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				timer2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_SB_D / aspd);
				fakeEnd_sorc_dist(event, S_SB_D,0);
				setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 200, event);
			}
			if (job == JOB_SLAYER && event.skill.id == S_KICK) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_KICK] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				timer2 = setTimeout(function () { disabSkill[S_MS] = false; }, S_KICK_D / aspd);
				fakeEnd_sorc_dist(event, S_KICK_D,0);
				if (glyphState[23076] ==1) {
					kickHTActive = true;
					setTimeout(function () { kickHTActive = false; },10000);
				}
				setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 200, event);
			}
			if (job == JOB_SLAYER && event.skill.id == S_FURY) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_FURY] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[S_MS] = true;
				setTimeout(function () { disabSkill[S_MS] = false; }, S_FURY_D / aspd);
				disabSkill[S_EVI] = true;
				setTimeout(function () { disabSkill[S_EVI] = false; }, S_FURY_D / aspd);
				fakeEnd_sorc_dist(event, S_FURY_D,0);
				if (glyphState[23032] ==1) {
					furyWWActive = true;
					setTimeout(function () { furyWWActive = false; },5000);
				}
			}
			if (job == JOB_SLAYER && event.skill.id == S_OP) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_OP] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_OP_D,0);
			}
			if (job == JOB_SLAYER && event.skill.id == S_TENA) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_TENA] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, (S_TENA_D1 + S_TENA_D2),0);
				setTimeout(function (event) {
					if (lastSkill == S_TENA) {
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
							effectScale: 1.0,
							moving: false,
							dest: { x: 0, y: 0, Z: 0 },
							target: 0n,
							animSeq: [],
						});
					}
				}, S_TENA_D1 / aspd, event);
			}
			if (job == JOB_SLAYER && (event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3)) {
				ICBLUL = true;
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_ICB_D,0);
				disabSkill[99150] = true;
				setTimeout(function () { disabSkill[99150] = false; }, (S_ICB_D + S_KDS_D));
				ICBActive = true;
				if (!specialicb) {
					setTimeout(function () { ICBActive = false; },20000);
				}
				if (specialicb) {
					setTimeout(function () { ICBActive = false; },25000);
				}
				if (ICB_BROOCH) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
			}
			if (job == JOB_SLAYER && event.skill.id == S_MS && finish[S_MS] != false) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_MS] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_MS_D,0);
				if (MS_AUTO_OP) {
					failsafe =0;
					lastSkill = S_MS;
					repeater(OP_KEY, S_MS);
				}
			}
			if (job == JOB_SLAYER && event.skill.id == S_EVI && finish[S_EVI] != false) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_EVI] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_EVI_D,0);
			}
			if (job == JOB_SLAYER && event.skill.id == S_RETAL) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_RETAL] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_RETAL_D,0);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
	});

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67119608);
		if (!enabled) return;
		if (event.gameId === cid) {
			var d = new Date();
			lastSkillTime[1] = d.getTime();
			lastSkillTime[3] = event.skill.id;
			var xzzy = event.skill.type ===1;
			if (!xzzy) {
				lastSkill =1;
			}
			chargeSkillFix2 = event.skill.id;
			if (OPALERT && !OPActive && event.skill.id != S_OP) {
				dispatch.toClient('S_WHISPER', 3, {
					gameId: cid,
					isWorldEventTarget: 0,
					gm: 0,
					founder: 0,
					name: "SlayerScript",
					recipient: player,
					message: "OP is not active.",
				});
			}
			if (job == JOB_SLAYER && (event.skill.id == S_DB1 || event.skill.id == S_DB2 || event.skill.id == S_DB3)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_BIGSWORD || event.skill.id == (S_BIGSWORD +1) || event.skill.id == (S_BIGSWORD +2) || event.skill.id == (S_BIGSWORD +3))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Decimate || event.skill.id == (S_Decimate +30))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_BlazingT || event.skill.id == (S_BlazingT +30) || event.skill.id == (S_BlazingT +31))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_KDS || event.skill.id == S_KDS_2 || event.skill.id == (S_KDS -1) || (event.skill.id == S_KDS +29))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2) || event.skill.id == (S_WW +30))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Roll || event.skill.id == S_Roll2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Dash)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Shout)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_OHS || event.skill.id == S_OHS2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_UOHS || event.skill.id == S_UOHS2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_LEAP)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_HT || event.skill.id == (S_HT +1) || event.skill.id == (S_HT +2) || event.skill.id == (S_HT +30))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_SB)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_KICK)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_FURY)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_OP)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_TENA)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3)) {//Ichangedthis
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_ELBOW)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_MS || event.skill.id == S_MS2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_EVI || event.skill.id == S_EVI2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_RETAL)) {
				if (Ignore1) {
					fakeEnd_sorc_dist(event, S_RETAL_D,0);
					lastSkill = S_RETAL;
				}
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == SKILL_CHARGING)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_BStab)) {
				backstabActive = true;
				if (DISABLE_BACKSTAB == false) {
					return false;
				}
			}
		}
	});

	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108232) console.log("error");
		if (!enabled) return;
		if (event.gameId === cid) {
			var d = new Date();
			lastSkillTime[2] = d.getTime();
			if (((lastSkillTime[2] - lastSkillTime[1]) > lastLastSkillDelay) && (event.skill.id == lastLastSkill || event.skill.id == lastLastSkill +30) && (lastLastSkill == lastSkillTime[3] || lastLastSkill == (lastSkillTime[3] -30))) {
				if (lastSkill != S_OP && lastSkill != S_Roll && lastLastSkill != S_OP) {
					//clearTimeout(timer[lastSkill]);
				}
				RecheckTimer = setTimeout(function () {
					if (lastSkill == S_OP || lastLastSkill == S_OP || lastSkill == S_Roll) { return; }
					/*dispatch.toClient('S_ACTION_END', 5, lastSkillEvent);*/
				}, (lastSkillDelay + lastSkillStart - lastSkillTime[1] - lastLastSkillDelay));
			}
			if (job == JOB_SLAYER && (event.skill.id == S_DB1 || event.skill.id == S_DB2 || event.skill.id == S_DB3)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_BIGSWORD || event.skill.id == (S_BIGSWORD +1) || event.skill.id == (S_BIGSWORD +2) || event.skill.id == (S_BIGSWORD +3))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Decimate || event.skill.id == (S_Decimate +30))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_BlazingT || event.skill.id == (S_BlazingT +30) || event.skill.id == (S_BlazingT +31))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_KDS || event.skill.id == S_KDS_2 || event.skill.id == (S_KDS -1) || (event.skill.id == S_KDS +29))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_WW || event.skill.id == (S_WW +1) || event.skill.id == (S_WW +2) || event.skill.id == (S_WW +30))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Roll || event.skill.id == S_Roll2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Dash)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_Shout)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_OHS || event.skill.id == S_OHS2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_UOHS || event.skill.id == S_UOHS2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_LEAP)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_HT || event.skill.id == (S_HT +1) || event.skill.id == (S_HT +2) || event.skill.id == (S_HT +30))) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_SB)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_KICK)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_FURY)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_OP)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_TENA)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_ICB || event.skill.id == S_ICB2 || event.skill.id == S_ICB3)) {//Ichangedthis
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_ELBOW)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_MS || event.skill.id == S_MS2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_EVI || event.skill.id == S_EVI2)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == S_RETAL)) {
				return false;
			}
			if (job == JOB_SLAYER && (event.skill.id == SKILL_CHARGING)) {
				if (finish[SKILL_CHARGING] == false) {
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
			if (job == JOB_SLAYER && (event.skill.id == S_BStab)) {
				backstabActive = false;
				if (DISABLE_BACKSTAB == false) {
					return false;
				}
			}
			if (lastSkill != S_BStab && event.skill.id == S_BStab) {
				return false;
			}
		}
	});

	dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
		if (!enabled) return;
		event.cooldown -= GLOBAL_LATENCY;
		if (event.skill.id == S_BIGSWORD) {
			clearTimeout(kms);
			disabSkill[666] = true;
			kms = setTimeout(function () { disabSkill[666] = false; },500);
		}
		if (event.skill.id == SKILL_CHARGING) {
			clearTimeout(hlr2);
			hlrlock = true;
			hlr2 = setTimeout(function () { hlrlock = false; }, event.cooldown);
		}
		return true;
	});


	dispatch.hook('S_PLAYER_STAT_UPDATE', dispatch.majorPatchVersion >= 93 ? 14 : 13, (event) => {
		if (!enabled) return;
		aspd = (event.attackSpeed + event.attackSpeedBonus) / event.attackSpeed;
		if (event.curHp ==0) {
			ICBActive = false;
			backstabActive = false;
		}
	});

	dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
		if (!enabled) return;
		if (lastSkill == S_BlazingT && finish[lastSkill] == false) { return; }
		xloc = event.dest.x;
		yloc = event.dest.y;
		zloc = event.dest.z;
		wloc = event.w;
		timeloc = event.time +1;
	});

	dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, (event) => {
		if (!enabled) return;
		xloc = event.loc.x;
		yloc = event.loc.y;
		zloc = event.loc.z;
		if (event.skill.id != S_KDS) {
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: event.skill.id,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 100, event);
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: event.skill.id,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 200, event);
		}
		if (event.skill.id == S_KDS && disabSkill[99150]) {
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_KDS_2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 0, event);
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_KDS_2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 100, event);
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: S_KDS_2,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 200, event);
		}
		if (event.skill.id == S_KDS) {
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: realKDS.skill,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 100, event);
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: realKDS.skill,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 200, event);
			event.skill.id = realKDS.skill;
			return true;
		}
	});
	dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 4, (event) => {
		if (!enabled) return;
		dashX = event.loc.x;
		dashY = event.loc.y;
		dashZ = event.loc.z;
		setTimeout(function (event) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_DASH', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}, 75, event);
		setTimeout(function (event) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_DASH', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
			hlrFix = true
		}, 120, event);
		return false;
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
	})

	dispatch.hook('S_ACTION_STAGE', 9, { filter: { fake: true } }, (e) => {
	  //console.log("test: " + event.skill == 67119608);
		if (e.gameId == cid && e.stage == 1 && e.skill.id ==270100) {
			process.nextTick(() => {
				dispatch.send('S_ACTION_END', 5, {
					gameId: e.gameId,
					loc: e.loc,
					w: e.w,
					templateId: e.templateId,
					skill: e.skill,
					type: 0,
					id: e.id
				})
			});
		}
	})

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