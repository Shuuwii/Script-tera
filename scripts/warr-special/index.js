'use strict'
const JOB_WARRIOR =0;

// Warrior Skills
const SKILL_RISING_FURY_1 =191100;
const SKILL_RISING_FURY_1_DURATION =880;
const SKILL_RISING_FURY_1_DISTANCE = 0; //168;
const SKILL_RISING_FURY_2 =191101;
const SKILL_RISING_FURY_2_DURATION =1680;
const SKILL_RISING_FURY_2_DISTANCE = 0; //121;
const SKILL_COMBATIVE_STRIKE =181101;
const SKILL_COMBATIVE_STRIKE_2 =181102;
const SKILL_COMBATIVE_STRIKE_DURATION =1320;
const SKILL_COMBATIVE_STRIKE_DISTANCE = 0; //138;
const SKILL_TOB =30300;
const SKILL_TOB_DURATION =1920;
const SKILL_TOB_DISTANCE = 0; //68;
const SKILL_BD =290900;
const SKILL_BD_2 =290930;
const SKILL_BD_3 =370100;
const SKILL_BD_4 =370130;
const SKILL_BD_DURATION = 3600; //1600 SPEED
const SKILL_BD_DISTANCE = 0; //95;
const SKILL_DFA =100700;
const SKILL_DFA_DURATION =2480;
const SKILL_TC =281000;
const SKILL_TC_2 =281030;
const SKILL_TC_DURATION = 2400; //3240 CHAIN
const SKILL_TC_DISTANCE = 80; //158;
const SKILL_PB =111100;
const SKILL_PB_DURATION =1000;
const SKILL_VORTEX =170700;
const SKILL_VORTEX_DURATION =1920;
const SKILL_ROB =40900;
const SKILL_ROB_2 =40930;
const SKILL_ROB_3 =360100;
const SKILL_ROB_4 =360130;
const SKILL_ROB_DURATION =3050;
const SKILL_ROB_DISTANCE = 0; //155;
const SKILL_SCYTHE =300900;
const SKILL_SCYTHE_2 =300930;
const SKILL_SCYTHE_3 =380100;
const SKILL_SCYTHE_4 =380130;
const SKILL_SCYTHE_DURATION =2200;
const SKILL_SCYTHE_DISTANCE = 0; //135;
const SKILL_POUNCE =270400;
const SKILL_POUNCE_DURATION =2380;
const SKILL_CASCADE =210500;
const SKILL_CASCADE_DURATION =1680;
const SKILL_REAPING =310800;
const SKILL_REAPING_2 =310830;
const SKILL_REAPING_DURATION =2750;

const SKILL_DEADLY_GAMBLE =200200;
const SKILL_DEADLY_GAMBLE_DURATION =320;
const SKILL_BATTLE_CRY =50300;
const SKILL_BATTLE_CRY_DURATION =2000;
const SKILL_INFURIATE =350100;
const SKILL_INFURIATE_DURATION =2900;
const SKILL_SMOKE_AGG =240200;
const SKILL_SMOKE_AGG_DURATION =385;

const SKILL_FLANKER =330200;

const SKILL_BACKSTAB =220200;
const SKILL_BACKSTAB_DURATION =1550;
const SKILL_STAGGER_COUNTER =230600;
const SKILL_STAGGER_COUNTER_DURATION =1270;
const SKILL_BLOCK =320100;
const SKILL_CHARGING =161000;
const SKILL_CHARGING_DURATION =1100;
const SKILL_CHARGING_DISTANCE =494;
const SKILL_CHARGING_2 =161001;
const SKILL_CHARGING_2_DURATION =930;

const S_P =11200;
const S_P2 =11201;
const S_P3 =11202;
const S_P4 =11203;
const S_P_D =680;
const S_P2_D =800;
const S_P3_D =800;
const S_P4_D =1110;

const SKILL_LEAPING =120800;
const SKILL_LEAPING_DURATION =1840;
const SKILL_LEAPING_DISTANCE = 150; //100;250;
const SKILL_ROLL =20100;
//const SKILL_ROLL_DURATION =1000;
const SKILL_ROLL_DISTANCE =150;

const SKILL_RETALIATE =131000;
const SKILL_RETALIATE_DURATION =1950;

const SKILL_TRAVERSE_DS =390100;

const SKILL_SPIRAL_SLASH_EX =400110;
const SKILL_SPIRAL_SLASH_EX_2 =400120;
const SKILL_SPIRAL_SLASH_EX_DURATION =975;
const SKILL_SPIRAL_SLASH_EX_DISTANCE =150;

const SKILL_STORM_CRASH_EX = 410100; //65 version2
const SKILL_STORM_CRASH_EX_DURATION = 2370; //1330;
const SKILL_STORM_CRASH_EX_DURATION_2 =2160;
const SKILL_STORM_CRASH_EX_DISTANCE =200;
const SKILL_STORM_CRASH_EX_DISTANCE_2 =0;

const SKILL_TEMPEST_RUSH_EX =420100;
const SKILL_TEMPEST_RUSH_EX_DURATION =3970;
const SKILL_TEMPEST_RUSH_EX_DURATION_CHAIN =3000;
const SKILL_TEMPEST_RUSH_EX_DISTANCE =300;

const SKILL_VORTEX_EX =170701; 
const SKILL_VORTEX_EX_2 =170702;
const SKILL_VORTEX_EX_DURATION =1920;
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
	111286, 111287, 111288, 111289, 111290, 111291, 111292, 111293, 111294, 111295, 111296, 111297, 111298, 111299, 111301, 111302, 111310, 111320, 111319, 111324, 111325, 111330, 111305, 111326, 111328, 111314, 111308, 111307];

module.exports = function warrior(dispatch) {

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

	let DISABLE_WALTZ = false;
	if (("DISABLE_WALTZ" in config)) {
		DISABLE_WALTZ = config.DISABLE_WALTZ;
	}
	if (!("DISABLE_WALTZ" in config)) {
		config.DISABLE_WALTZ = false;
		config.DISABLE_WALTZ_DESCRIPTION = "Disables waltz emulation. Some people get better performance without waltz emulation.";
		settingUpdate();
	}

	let WALTZ_LOCK =900;

	let BD_LOCK = false;
	if (("BD_LOCK" in config)) {
		BD_LOCK = config.BD_LOCK;
	}
	if (!("BD_LOCK" in config)) {
		config.BD_LOCK = false;
		config.BD_LOCK_DESCRIPTION = "Bladedraw cannot be cancelled within BD_LOCK_DURATION except by roll. This is to stop accidental second hit cancels.";
		settingUpdate();
	}

	let BD_LOCK_DURATION =700;
	if (("BD_LOCK_DURATION" in config)) {
		BD_LOCK_DURATION = config.BD_LOCK_DURATION;
	}
	if (!("BD_LOCK_DURATION" in config)) {
		config.BD_LOCK_DURATION =700;
		config.BD_LOCK_DURATION_DESCRIPTION = "Bladedraw lock duration with BD_LOCK.";
		settingUpdate();
	}
	
	let ROB_LOCK = false;
	if (("ROB_LOCK" in config)) {
		ROB_LOCK = config.ROB_LOCK;
	}
	if (!("ROB_LOCK" in config)) {
		config.ROB_LOCK = false;
		config.ROB_LOCK_DESCRIPTION = "ROB cannot be cancelled within ROB_LOCK_DURATION except by roll. This is to stop accidental edge cancels.";
		settingUpdate();
	}

	let ROB_LOCK_DURATION =1100;
	if (("ROB_LOCK_DURATION" in config)) {
		ROB_LOCK_DURATION = config.ROB_LOCK_DURATION;
	}
	if (!("ROB_LOCK_DURATION" in config)) {
		config.ROB_LOCK_DURATION =1100;
		config.ROB_LOCK_DURATION_DESCRIPTION = "ROB lock duration with ROB_LOCK.";
		settingUpdate();
	}
	
	let AS_LOCK = false;
	if (("AS_LOCK" in config)) {
		AS_LOCK = config.AS_LOCK;
	}
	if (!("AS_LOCK" in config)) {
		config.AS_LOCK = false;
		config.AS_LOCK_DESCRIPTION = "Aerial Scythe cannot be cancelled within AS_LOCK_DURATION except by roll. This is to stop accidental edge miss.";
		settingUpdate();
	}
	
	let AS_LOCK_DG_IGNORE = false;
	if (("AS_LOCK_DG_IGNORE" in config)) {
		AS_LOCK_DG_IGNORE = config.AS_LOCK_DG_IGNORE;
	}
	if (!("AS_LOCK_DG_IGNORE" in config)) {
		config.AS_LOCK_DG_IGNORE = false;
		config.AS_LOCK_DG_IGNORE_DESCRIPTION = "If this is set to true, AS_LOCK is ignored in Deadly Gamble.";
		settingUpdate();
	}

	let AS_LOCK_DURATION =600;
	if (("AS_LOCK_DURATION" in config)) {
		AS_LOCK_DURATION = config.AS_LOCK_DURATION;
	}
	if (!("AS_LOCK_DURATION" in config)) {
		config.AS_LOCK_DURATION =600;
		config.AS_LOCK_DURATION_DESCRIPTION = "Aerial Scythe lock duration with AS_LOCK.";
		settingUpdate();
	}
	
	let DG_X = false;
	if (("DG_X" in config)) {
		DG_X = config.DG_X;
	}
	if (!("DG_X" in config)) {
		config.DG_X = false;
		config.DG_X_DESCRIPTION = "Auto use X_KEY when Deadly Gamble is used. BROOCH_KEY must be set. This macro does not work without ROBOTJS.";
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
	
	let WALTZ_AUTO_BD = false;
	if (("WALTZ_AUTO_BD" in config)) {
		WALTZ_AUTO_BD = config.WALTZ_AUTO_BD;
	}
	if (!("WALTZ_AUTO_BD" in config)) {
		config.WALTZ_AUTO_BD = false;
		config.WALTZ_AUTO_BD_DESCRIPTION = "Auto use Bladedraw when Blade Waltz is used. BD_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let WALTZ_AUTO_BD_ONLY_DG = false;
	if (("WALTZ_AUTO_BD_ONLY_DG" in config)) {
		WALTZ_AUTO_BD_ONLY_DG = config.WALTZ_AUTO_BD_ONLY_DG;
	}
	if (!("WALTZ_AUTO_BD_ONLY_DG" in config)) {
		config.WALTZ_AUTO_BD_ONLY_DG = false;
		config.WALTZ_AUTO_BD_ONLY_DG_DESCRIPTION = "If WALTZ_AUTO_BD is enabled with this, auto waltz -> BD will only occur during deadly gamble.";
		settingUpdate();
	}
	
	let BD_KEY = "9";
	if (("BD_KEY" in config)) {
		BD_KEY = config.BD_KEY;
	}
	if (!("BD_KEY" in config)) {
		config.BD_KEY = "9";
		config.BD_KEY_DESCRIPTION = "Bladedraw Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let BLADE_FRENZY_AUTO_DODGE = false;
	if (("BLADE_FRENZY_AUTO_DODGE" in config)) {
		BLADE_FRENZY_AUTO_DODGE = config.BLADE_FRENZY_AUTO_DODGE;
	}
	if (!("BLADE_FRENZY_AUTO_DODGE" in config)) {
		config.BLADE_FRENZY_AUTO_DODGE = false;
		config.BLADE_FRENZY_AUTO_DODGE_DESCRIPTION = "Auto use dodge when blade frenzy is used. DODGE_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	let BLADE_FRENZY_AUTO_DODGE_DELAY =2200;
	if (("BLADE_FRENZY_AUTO_DODGE_DELAY" in config)) {
		BLADE_FRENZY_AUTO_DODGE_DELAY = config.BLADE_FRENZY_AUTO_DODGE_DELAY;
	}
	if (!("BLADE_FRENZY_AUTO_DODGE_DELAY" in config)) {
		config.BLADE_FRENZY_AUTO_DODGE_DELAY =2200;
		config.BLADE_FRENZY_AUTO_DODGE_DELAY_DESCRIPTION = "Delay for blade frenzy auto dodge, will scale with aspd";
		settingUpdate();
	}
	let DODGE_KEY = "9";
	if (("DODGE_KEY" in config)) {
		DODGE_KEY = config.DODGE_KEY;
	}
	if (!("DODGE_KEY" in config)) {
		config.DODGE_KEY = "9";
		config.DODGE_KEY_DESCRIPTION = "Dodge Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let RFCANCEL_DELAY =100;
	if (("RFCANCEL_DELAY" in config)) {
		RFCANCEL_DELAY = config.RFCANCEL_DELAY;
	}
	if (!("RFCANCEL_DELAY" in config)) {
		config.RFCANCEL_DELAY =100;
		config.RFCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let RF2CANCEL_DELAY =420;
	if (("RF2CANCEL_DELAY" in config)) {
		RF2CANCEL_DELAY = config.RF2CANCEL_DELAY;
	}
	if (!("RF2CANCEL_DELAY" in config)) {
		config.RF2CANCEL_DELAY =420;
		config.RF2CANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let CSCANCEL_DELAY =550;
	if (("CSCANCEL_DELAY" in config)) {
		CSCANCEL_DELAY = config.CSCANCEL_DELAY;
	}
	if (!("CSCANCEL_DELAY" in config)) {
		config.CSCANCEL_DELAY =550;
		config.CSCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let PBCANCEL_DELAY =550;
	if (("PBCANCEL_DELAY" in config)) {
		PBCANCEL_DELAY = config.PBCANCEL_DELAY;
	}
	if (!("PBCANCEL_DELAY" in config)) {
		config.PBCANCEL_DELAY =550;
		config.PBCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let VORTEXCANCEL_DELAY =770;
	if (("VORTEXCANCEL_DELAY" in config)) {
		VORTEXCANCEL_DELAY = config.VORTEXCANCEL_DELAY;
	}
	if (!("VORTEXCANCEL_DELAY" in config)) {
		config.VORTEXCANCEL_DELAY =770;
		config.VORTEXCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let REAPINGCANCEL_DELAY =840;
	if (("REAPINGCANCEL_DELAY" in config)) {
		REAPINGCANCEL_DELAY = config.REAPINGCANCEL_DELAY;
	}
	if (!("REAPINGCANCEL_DELAY" in config)) {
		config.REAPINGCANCEL_DELAY =840;
		config.REAPINGCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let CHAINREAPINGCANCEL_DELAY =400;
	if (("CHAINREAPINGCANCEL_DELAY" in config)) {
		CHAINREAPINGCANCEL_DELAY = config.CHAINREAPINGCANCEL_DELAY;
	}
	if (!("CHAINREAPINGCANCEL_DELAY" in config)) {
		config.CHAINREAPINGCANCEL_DELAY =400;
		config.CHAINREAPINGCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let RAWSCYTHECANCEL_DELAY =1000;
	if (("RAWSCYTHECANCEL_DELAY" in config)) {
		RAWSCYTHECANCEL_DELAY = config.RAWSCYTHECANCEL_DELAY;
	}
	if (!("RAWSCYTHECANCEL_DELAY" in config)) {
		config.RAWSCYTHECANCEL_DELAY =1000;
		config.RAWSCYTHECANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let CHAINSCYTHECANCEL_DELAY =750;
	if (("CHAINSCYTHECANCEL_DELAY" in config)) {
		CHAINSCYTHECANCEL_DELAY = config.CHAINSCYTHECANCEL_DELAY;
	}
	if (!("CHAINSCYTHECANCEL_DELAY" in config)) {
		config.CHAINSCYTHECANCEL_DELAY =750;
		config.CHAINSCYTHECANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let RAWROBCANCEL_DELAY =1800;
	if (("RAWROBCANCEL_DELAY" in config)) {
		RAWROBCANCEL_DELAY = config.RAWROBCANCEL_DELAY;
	}
	if (!("RAWROBCANCEL_DELAY" in config)) {
		config.RAWROBCANCEL_DELAY =1800;
		config.RAWROBCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let CHAINROBCANCEL_DELAY =1380;
	if (("CHAINROBCANCEL_DELAY" in config)) {
		CHAINROBCANCEL_DELAY = config.CHAINROBCANCEL_DELAY;
	}
	if (!("CHAINROBCANCEL_DELAY" in config)) {
		config.CHAINROBCANCEL_DELAY =1380;
		config.CHAINROBCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let RAWBDCANCEL_DELAY =1680;
	if (("RAWBDCANCEL_DELAY" in config)) {
		RAWBDCANCEL_DELAY = config.RAWBDCANCEL_DELAY;
	}
	if (!("RAWBDCANCEL_DELAY" in config)) {
		config.RAWBDCANCEL_DELAY =1680;
		config.RAWBDCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let CHAINBDCANCEL_DELAY =740;
	if (("CHAINBDCANCEL_DELAY" in config)) {
		CHAINBDCANCEL_DELAY = config.CHAINBDCANCEL_DELAY;
	}
	if (!("CHAINBDCANCEL_DELAY" in config)) {
		config.CHAINBDCANCEL_DELAY =740;
		config.CHAINBDCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let CASCADECANCEL_DELAY =640;
	if (("CASCADECANCEL_DELAY" in config)) {
		CASCADECANCEL_DELAY = config.CASCADECANCEL_DELAY;
	}
	if (!("CASCADECANCEL_DELAY" in config)) {
		config.CASCADECANCEL_DELAY =640;
		config.CASCADECANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let TOBCANCEL_DELAY =1260;
	if (("TOBCANCEL_DELAY" in config)) {
		TOBCANCEL_DELAY = config.TOBCANCEL_DELAY;
	}
	if (!("TOBCANCEL_DELAY" in config)) {
		config.TOBCANCEL_DELAY =1260;
		config.TOBCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let SHOUTCANCEL_DELAY =1440;
	if (("SHOUTCANCEL_DELAY" in config)) {
		SHOUTCANCEL_DELAY = config.SHOUTCANCEL_DELAY;
	}
	if (!("SHOUTCANCEL_DELAY" in config)) {
		config.SHOUTCANCEL_DELAY =1440;
		config.SHOUTCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let ENRAGECANCEL_DELAY =1860;
	if (("ENRAGECANCEL_DELAY" in config)) {
		ENRAGECANCEL_DELAY = config.ENRAGECANCEL_DELAY;
	}
	if (!("ENRAGECANCEL_DELAY" in config)) {
		config.ENRAGECANCEL_DELAY =1860;
		config.ENRAGECANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let BACKSTABCANCEL_DELAY =880;
	if (("BACKSTABCANCEL_DELAY" in config)) {
		BACKSTABCANCEL_DELAY = config.BACKSTABCANCEL_DELAY;
	}
	if (!("BACKSTABCANCEL_DELAY" in config)) {
		config.BACKSTABCANCEL_DELAY =880;
		config.BACKSTABCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}
	let AERIALCANCEL_DELAY =625;
	if (("AERIALCANCEL_DELAY" in config)) {
		AERIALCANCEL_DELAY = config.AERIALCANCEL_DELAY;
	}
	if (!("AERIALCANCEL_DELAY" in config)) {
		config.AERIALCANCEL_DELAY =625;
		config.AERIALCANCEL_DELAY_DESCRIPTION = "set to 0 to disable auto cancel. This is cancel time in milliseconds and scales with aspd. Only works with dstance.";
		settingUpdate();
	}

	let KR_RF2SPEED =1;

	let cid;
	let job;
	let model;
	let player;
	let enabled = false;
	let aspd;

	let atkid = [];
	let atkid_base = 0xFEFEFFEE;

	let disabSkill = [];
	let unlockAll = false;
	let startTime = [];
	let timer = [];
	let finishcheck = [];
	let finish = [];
	let vortexTimer;
	let charging = false;
	let backstabActive = false;
	let myRE;
	
	let truefinishcheck = [];
	let truefinish = [];

	let timeloc;
	let robtal = false;
	let cancelAdvanced = false;

	let punchCounter =0;
	let clearPunchCounter;
	
	let failsafe =0;

	let walter;
	let blockwaltz = false;

	let locknext = false;

	let ss1;
	let ss2;

	let blockX;
	let dstance = false;
	let msgSuppress;

	let spiral = false;
	let spiral2;

	let autoTimer;

	let tCLock;
	let bDLock;
	let roBLock;
	let reapLock;
	let scytheLock;
	let rollLock;
	let tOBLock;

	let Ignore1 = false;
	let Ignore2;
	let falsestart = false;
	
	let SKILL_ROLL_DURATION =1000;

	let npcLociX = [];
	let npcLociY = [];
	let npcLociZ = [];
	let npcLociW = [];

	let buzz1 = false;
	let buzz2;
	let buzz3 = false;
	let buzz4;
	let buzz5 = false;
	let buzz6;
	

	let lastSkill;
	let lastLastSkill;
	let lastEvent;
	let lastEventTime;
	let currentRe;
	let vortexActive = false;
	let staggerCounter = false;
	let staggerCounter2;
	let GLOBAL_LOCK_DELAY =1000;
	let blockActive =0;
	let instantBlockActive =0;
	let bdBlockActive =0;
	let tbBlockActive =0;
	let lazyBlockActive =0;

	let lastSkillTime = [];
	let lastSkillDelay;
	let lastLastSkillDelay;
	let lastSkillStart;
	let lastSkillEvent;
	let RecheckTimer;

	let zzz =0;
	let dgActive = false;
	let dgActive2;
	let glyphState = [];
	let charging1;

	let collisionLocX;
	let collisionLocY;
	let collisionLocZ;
	let collisionLocX2;
	let collisionLocY2;
	let collisionLocZ2;
	let telex;
	let teley;
	let telez;
	let telew;
	let zoKk;

	let roz1;
	let roz2;

	let backStepStart;

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
			enabled = [JOB_WARRIOR].includes(job);
			if (!enabled) { dstance = false; }
		}
	});

	dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		cid = event.gameId;
		model = event.templateId;
		dstance = false;
		player = event.name;
		job = (model -10101) %100;
		enabled = [JOB_WARRIOR].includes(job);
		if (!enabled) { dstance = false; }
		var race = Math.floor((model -10101) /100);
		if (race ==8) {
		  SKILL_ROLL_DURATION =1000;
		}
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("disable0")) {
			enabled = false;
			console.log("Warrior script disabled");
			return false;
		}
		if (event.message.includes("enable0")) {
			enabled = [JOB_WARRIOR].includes(job);
			console.log("Warrior script enabled if you are currently logged into warrior");
			return false;
		}
	});
	
	dispatch.hook('S_CANNOT_START_SKILL', 4, {order: -999}, (event) => {
		if (!enabled) return;
		if(event.skill.id === SKILL_BACKSTAB){
			return false;
		}
	});
	
	dispatch.hook('S_CREATURE_ROTATE', 2, (event) => {
        if (!enabled) { return }
        npcLociW[event.gameId] = event.w;
    });
	
	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) return;
		if(dispatch.parseSystemMessage(event.message).id == "SMT_SKILL_FAIL_CATEGORY") {return false};
	});

	function fakeEnd_sorc(event, duration) {
		collisionLocX = false;
		collisionLocY = false;
		collisionLocZ = false;
		zzz =0;
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
		var yyy =1;
		if ((glyphState[21040] == 1 || glyphState[21109] ==1) && event.skill.id == SKILL_BATTLE_CRY) {
			yyy = 1.5;
		}
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: 0,
			speed: aspd / 1.2 * yyy,
			...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd / 1.2 * yyy } : 0n),
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, animSeq: [],
		});
		truefinish[event.skill.id] = false;
		truefinishcheck[event.skill.id] = setTimeout(function (event) { truefinish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
		lastSkillDelay = duration / aspd;
		setTimeout(function (event) {
			lastSkillEvent = {
				gameId: cid,
				loc: {
					x: collisionLocX || event.loc.x,
					y: collisionLocY || event.loc.y,
					z: collisionLocZ || event.loc.z
				},
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			};
		}, duration / (aspd * yyy), event);
		timer[event.skill.id] = setTimeout(
			function (event) {
				if (lastSkill ==1) { return; }
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: collisionLocX || event.loc.x,
						y: collisionLocY || event.loc.y,
						z: collisionLocZ || event.loc.z
					},
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					type: 0,
					id: atkid[event.skill.id],
				});
			}, duration / (aspd * yyy), event);
	}

	function fakeEnd_bs(event, duration) {
		if (DISABLE_BACKSTAB) {
			finish[SKILL_BACKSTAB] = false;
			setTimeout(function () { finish[SKILL_BACKSTAB] = true; }, SKILL_BACKSTAB_DURATION / aspd);
			lastSkill = SKILL_BACKSTAB;
			return;
		}
		collisionLocX = false;
		collisionLocY = false;
		collisionLocZ = false;
		telex = false;
		teley = false;
		telez = false;
		telew = false;
		zzz =0;
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
			speed: aspd / 1.2,
			...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd / 1.2 } : 0n),
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, animSeq: [],
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

		var vvv =0;
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
		setTimeout(function () { backstabActive = false; }, duration / aspd);
		timer[event.skill.id] = setTimeout(
			function (event) {
				backstabActive = false;
				if(lastSkill != SKILL_BACKSTAB){ return;}
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

	function charge(event) {
		collisionLocX = false;
		collisionLocY = false;
		collisionLocZ = false;
		zzz =0;
		finish[SKILL_CHARGING] = true;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
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
		var zzzz = Math.pow((Math.pow((event.loc.x - event.dest.x),2) + Math.pow((event.loc.y - event.dest.y),2)), 0.5) / SKILL_CHARGING_DISTANCE * SKILL_CHARGING_DURATION +100;
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
			finish[event.skill.id] = true;
			if (lastSkill == SKILL_CHARGING) {
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: { x: event.dest.x, y: event.dest.y, z: event.dest.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					type: 39,
					id: atkid[event.skill.id],
				});
			}
		}, zzzz, event);
	}


	function force_end(event, unkz) {
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: {
				x: collisionLocX || event.loc.x,
				y: collisionLocY || event.loc.y,
				z: collisionLocZ || event.loc.z
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id + zzz,
			type: unkz, //0x02
			id: atkid[event.skill.id + zzz],
		});
		clearTimeout(timer[event.skill.id]);
	}
	
	dispatch.hook('S_RP_SKILL_POLISHING_LIST', 1, (event) => {
		if (!enabled) return;
		try{
		event.optionEffects.forEach(function(element){
		if(element.id ==17010402){
			robtal = element.active;
		}
		});
		}
		catch (e) { }
	});


	function fakeEnd_sorc_dist(event, duration, dist) {
		collisionLocX = false;
		collisionLocY = false;
		collisionLocZ = false;
		collisionLocX2 = false;
		collisionLocY2 = false;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		if (finish[lastSkill] == false) {
			force_end(lastEvent,4);
		}
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		zzz =0;
		var yyy =1;
		if (event.skill.id == SKILL_BD && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2 || lastSkill == SKILL_VORTEX || lastSkill == SKILL_VORTEX_EX || lastSkill == SKILL_VORTEX_EX_2 || lastSkill == SKILL_TC || lastSkill == SKILL_RISING_FURY_2) && finish[lastSkill] == false) {
			zzz =30;
			duration =1600;
			clearTimeout(RecheckTimer);
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			disabSkill[SKILL_REAPING] = true;
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / aspd);
			disabSkill[SKILL_ROB] = true;
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / aspd);
			disabSkill[SKILL_TC] = true;
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / aspd);
		}

		if (event.skill.id == SKILL_TEMPEST_RUSH_EX && (lastSkill == SKILL_SCYTHE || lastSkill == SKILL_ROLL || lastSkill == (SKILL_STORM_CRASH_EX +31)) && finish[lastSkill] == false) {
			zzz =30;
			duration = SKILL_TEMPEST_RUSH_EX_DURATION_CHAIN;
			clearTimeout(RecheckTimer);
		}

		if ((event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) && spiral) {
			zzz =2;
			clearTimeout(RecheckTimer);
		}


		if (event.skill.id == SKILL_BD && (lastSkill == SKILL_CHARGING_2 || (lastSkill == SKILL_TOB && tbBlockActive ==1)) && finish[lastSkill] == false) {
			zzz =30;
			duration =1600;
			clearTimeout(RecheckTimer);
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			disabSkill[SKILL_REAPING] = true;
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / aspd);
			disabSkill[SKILL_ROB] = true;
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / aspd);
			disabSkill[SKILL_TC] = true;
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / aspd);
		}
		if (event.skill.id == SKILL_BD && blockActive == 1 && bdBlockActive ==1) {
			zzz =30;
			duration =1600;
			clearTimeout(RecheckTimer);
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			disabSkill[SKILL_REAPING] = true;
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / aspd);
			disabSkill[SKILL_ROB] = true;
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / aspd);
			disabSkill[SKILL_TC] = true;
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / aspd);
		}
		if (event.skill.id == SKILL_BD && (lastSkill == SKILL_ROB || lastSkill == SKILL_BD || lastSkill == SKILL_SCYTHE || lastSkill == SKILL_STORM_CRASH_EX || lastSkill == (SKILL_STORM_CRASH_EX +31)) && lazyBlockActive ==1) {
			zzz =30;
			duration =1600;
			lazyBlockActive =0;
			clearTimeout(RecheckTimer);
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			disabSkill[SKILL_REAPING] = true;
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / aspd);
			disabSkill[SKILL_ROB] = true;
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / aspd);
			disabSkill[SKILL_TC] = true;
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / aspd);
		}
		if (event.skill.id == SKILL_ROB && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2 || lastSkill == SKILL_COMBATIVE_STRIKE || lastSkill == SKILL_COMBATIVE_STRIKE_2 || lastSkill == SKILL_POUNCE || lastSkill == SKILL_CASCADE) && finish[lastSkill] == false) {
			zzz =30;
			duration =2400;
			clearTimeout(RecheckTimer);
			clearTimeout(bDLock);
			clearTimeout(tCLock);
			disabSkill[SKILL_BD] = true;
			bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, duration / aspd);
			disabSkill[SKILL_TC] = true;
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / aspd);
		}
		if (event.skill.id == SKILL_SCYTHE && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2 || lastSkill == SKILL_PB || lastSkill == SKILL_ROB || lastSkill == SKILL_BD || lastSkill == SKILL_ROLL || lastSkill == SKILL_LEAPING) && finish[lastSkill] == false) {
			zzz =30;
			duration =1665;
			clearTimeout(RecheckTimer);
			clearTimeout(roBLock);
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / aspd);
			clearTimeout(reapLock);
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / aspd);
			clearTimeout(tCLock);
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / aspd);
		}
		if (event.skill.id == SKILL_TC && (lastSkill == SKILL_LEAPING || lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2 || lastSkill == SKILL_PB || lastSkill == SKILL_COMBATIVE_STRIKE || lastSkill == SKILL_COMBATIVE_STRIKE_2 || lastSkill == SKILL_POUNCE) && finish[lastSkill] == false) {
			zzz =30;
			duration =3200;
			clearTimeout(RecheckTimer);
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(scytheLock);
			disabSkill[SKILL_REAPING] = true;
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / aspd);
			disabSkill[SKILL_ROB] = true;
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / aspd);
			disabSkill[SKILL_SCYTHE] = true;
			scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, duration / aspd);
		}
		if (event.skill.id == SKILL_REAPING && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2 || lastSkill == SKILL_COMBATIVE_STRIKE || lastSkill == SKILL_COMBATIVE_STRIKE_2 || lastSkill == SKILL_ROB) && finish[lastSkill] == false) {
			zzz =30;
			duration =2000;
			clearTimeout(RecheckTimer);
		}
		if (event.skill.id == SKILL_SCYTHE && dgActive) {
			zzz = zzz + SKILL_SCYTHE_3 - SKILL_SCYTHE;
		}
		if (event.skill.id == SKILL_ROB && dgActive) {
			zzz = zzz + SKILL_ROB_3 - SKILL_ROB;
			if (duration == SKILL_ROB_DURATION) {
				duration =3360;
			}
		}
		if (event.skill.id == SKILL_BD && dgActive) {
			zzz = zzz + SKILL_BD_3 - SKILL_BD;
		}
		if (event.skill.id == SKILL_POUNCE && glyphState[21082] ==1) {
			yyy = 1.3;
			clearTimeout(reapLock);
			clearTimeout(scytheLock);
			clearTimeout(bDLock);
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / (aspd * 1.3));
			scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, duration / (aspd * 1.3));
			bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, duration / (aspd * 1.3));
		}
		if ((event.skill.id == SKILL_VORTEX_EX || event.skill.id == SKILL_VORTEX_EX_2) && glyphState[21040] ==1) {
			yyy = 1.3;
			clearTimeout(reapLock);
			clearTimeout(scytheLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, duration / (aspd * 1.3));
			scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, duration / (aspd * 1.3));
			roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, duration / (aspd * 1.3));
			tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, duration / (aspd * 1.3));
		}
		if (event.skill.id == SKILL_DEADLY_GAMBLE || event.skill.id == SKILL_SMOKE_AGG) {
			yyy = 1.2 / aspd;
		}
		/*if (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) {
			yyy = 0.8;
		}*/
		if (event.skill.id == SKILL_LEAPING && glyphState[21082] ==1) {
			yyy = yyy * 1.2;
			duration = duration / 1.2;
		}
		if (event.skill.id == SKILL_RISING_FURY_2 && talentState[811910]) {
			yyy = yyy + (50 / 1400 + talentState[811910] * (15 /1400));
		}
		if (event.skill.id == SKILL_RISING_FURY_1 && talentState[811910] && dispatch.majorPatchVersion >=81) {
			yyy = yyy + (50 / 1400 + talentState[811910] * (15 /1400));
		}
		if (event.skill.id == SKILL_BD && zzz ==30) {
			disabSkill[SKILL_COMBATIVE_STRIKE] = true;
			setTimeout(function () { disabSkill[SKILL_COMBATIVE_STRIKE] = false; }, 1565 / aspd);
		}
		if(event.skill.id == SKILL_ROB && robtal && !dstance){
			yyy = yyy * 1.15;
		}
		finish[SKILL_CHARGING] = true;
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		clearTimeout(truefinishcheck[event.skill.id]);
		truefinish[event.skill.id] = false;
		atkid[event.skill.id + zzz] = atkid_base;
		atkid_base--;

		if (!(DISABLE_WALTZ && (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2)/* && spiral*/)) {
			dispatch.toClient('S_ACTION_STAGE', 9, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id + zzz,
				stage: 0,
				speed: aspd / 1.2 * yyy,
				...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd / 1.2 * yyy } : 0n),
				id: atkid[event.skill.id + zzz],
				effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, animSeq: [],
			});
		}

		var newX;
		var newY;
		var angle = parseFloat(event.w);

		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;

		if (event.skill.id == SKILL_BD) {
			clearTimeout(bDLock);
			disabSkill[SKILL_BD] = true;
			bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, (duration / (aspd * yyy)));
		}

		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
		truefinishcheck[event.skill.id] = setTimeout(function (event) { truefinish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
		if (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2 || event.skill.id == SKILL_STORM_CRASH_EX) {
			clearTimeout(finishcheck[event.skill.id]);
			finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, ((duration / aspd) +1300), event);
		}
		lastSkillDelay = duration / aspd;
		setTimeout(function (event) {
			lastSkillEvent = {
				gameId: cid,
				loc: {
					x: collisionLocX || event.loc.x + newX,
					y: collisionLocY || event.loc.y + newY,
					z: collisionLocZ || (event.loc.z +2)
				},
				w: event.w,
				templateId: model,
				skill: event.skill.id + zzz,
				type: 0,
				id: atkid[event.skill.id + zzz],
			};
		}, (duration / (aspd * yyy)), event);
		timer[event.skill.id] = setTimeout(
			function (event, lastZ1, dist) {
				if (lastSkill ==1) { return; }
				if ((DISABLE_WALTZ && (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2)/* && lastZ1 == 2*/)) { return; }
				var newX;
				var newY;
				var angle = parseFloat(event.w);

				newX = Math.cos(angle) * dist;
				newY = Math.sin(angle) * dist;
				if (event.skill.id == SKILL_TEMPEST_RUSH_EX) {
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: {
							x: collisionLocX2 || (event.loc.x + newX),
							y: collisionLocY2 || (event.loc.y + newY),
							z: (event.loc.z +2)
						},
						w: event.w,
						templateId: model,
						skill: event.skill.id + lastZ1,
						type: 0,
						id: atkid[event.skill.id + lastZ1],
					});
					return;
				}
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: collisionLocX || event.loc.x + newX,
						y: collisionLocY || event.loc.y + newY,
						z: collisionLocZ || event.loc.z + 2
					},
					w: event.w,
					templateId: model,
					skill: event.skill.id + lastZ1,
					type: 0,
					id: atkid[event.skill.id + lastZ1],
				});
			}, (duration / (aspd * yyy)), event, zzz, dist);
	}

	dispatch.hook('S_PLAYER_CHANGE_STAMINA', 1, (event) => {
		if (!enabled) return;
		myRE = event.current;
	});

	dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		if (event.target === cid) {
			if (event.reaction.enable == true) {
				lastSkill =1;
			}
		}
	});

	dispatch.hook('S_CANNOT_START_SKILL', 4, (event) => {
		if (!enabled) { return };
		if (event.skill.id == (SKILL_BLOCK) && lastSkill == SKILL_BLOCK && zoKk ==0) {
			dispatch.toServer('C_PRESS_SKILL', 4, lastEvent);
			if (instantBlockActive ==0) {
				lastEvent.press =0;
				dispatch.toServer('C_PRESS_SKILL', 4, lastEvent);
				lastSkill =1;
			}
			zoKk++;
		}
	});

	dispatch.hook('C_START_TARGETED_SKILL', 7, (event) => {
		if (!enabled) return;
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (instantBlockActive == 1 && event.skill.id != SKILL_FLANKER) { return false; }
		if (lastSkill == SKILL_STORM_CRASH_EX && event.skill.id != SKILL_DFA && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_STORM_CRASH_EX && truefinish[lastSkill] == false) {
			return false;
		}
		if(event.skill.id == SKILL_CHARGING && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2) && truefinish[lastSkill] == false){
			return false;
		}
		if(event.skill.id != SKILL_CHARGING){
			clearTimeout(charging1);
			disabSkill[SKILL_CHARGING] = false;
		}
		let xxyyzz = false;
		if (!disabSkill[event.skill.id] || (unlockAll && event.skill.id != lastSkill)) {
			unlockAll = false;
			if (cancelAdvanced) {
				xxyyzz = true;
			}
			if (xxyyzz == true) {
				cancelAdvanced = false;
				disabSkill = [];
				dispatch.toServer('C_PRESS_SKILL', 4, {
					skill: SKILL_BLOCK,
					press: true,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
				//setTimeout(function(event){
				dispatch.toServer('C_PRESS_SKILL', 4, {
					skill: SKILL_BLOCK,
					press: false,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});//}, 1, event);
			}
			lastSkillDelay =999999;
			if ((DISABLE_BACKSTAB == false || event.skill.id == SKILL_CHARGING) && event.skill.id != SKILL_FLANKER) {
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 25, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 50, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 75, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 100, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 125, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) {dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 150, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 175, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id || lastSkill == SKILL_CHARGING_2) {dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }}, 200, event);
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_CHARGING) {
				charge(event);
				disabSkill[event.skill.id] = true;
				clearTimeout(charging1);
				charging1 = setTimeout(function () { disabSkill[SKILL_CHARGING] = false; }, GLOBAL_LOCK_DELAY);
				//disabSkill[SKILL_PB] = true;
				//roz1 = setTimeout(function () { disabSkill[SKILL_PB] = false; },1100);
				//disabSkill[SKILL_COMBATIVE_STRIKE] = true;
				//roz2 = setTimeout(function () { disabSkill[SKILL_COMBATIVE_STRIKE] = false; },1100);
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_BACKSTAB) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BACKSTAB] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_bs(event, SKILL_BACKSTAB_DURATION);
				if (BACKSTABCANCEL_DELAY > 0 && dstance && !DISABLE_BACKSTAB) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						backstabActive = false;
						if (lastSkill != SKILL_BACKSTAB) { return; }
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
							type: 10,
							id: atkid[event.skill.id],
						});
						unlockAll = true;
					}, BACKSTABCANCEL_DELAY / aspd, event);
				}
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

	dispatch.hook('S_CREST_APPLY', 2, (event) => {
		if (!enabled) { return };
		glyphState[event.id] = event.enable2;
	});


	dispatch.hook('S_INSTANT_MOVE', 3, (event) => {
		if (!enabled) { return };
		if (event.gameId === cid) {
			telex = event.loc.x;
			teley = event.loc.y;
			telez = event.loc.z;
			telew = event.w;
		}
	});

	dispatch.hook('S_ABNORMALITY_BEGIN', 4, (event) => {
		if (!enabled) { return };
		if (event.target !== cid) {
			return;
		}
		if (event.id ==100297) {
			dstance = true;
		}
		if (event.id ==100700) {
			staggerCounter = true;
		}
		if (event.id ==104100) {
			spiral = true;
		}
		if (event.id ==100801){
			clearTimeout(dgActive2);
			dgActive2 = setTimeout(function () { dgActive = false; }, Number(event.duration));
		}
		if (event.id == 104101 && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2)) {
			blockwaltz = true;
			event.duration = event.duration - BigInt(GLOBAL_LATENCY +10);
			setTimeout(() => {
				blockwaltz = false;
			}, Number(event.duration));
			return true;
		}
	});

	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) { return };
		if ((event.message == '@2059' || event.message == '@36') && (msgSuppress == event.message || lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2)) {
			return false;
		}
		msgSuppress = event.message;
	});

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
		if (!enabled) { return };
		if (event.target !== cid) {
			return;
		}
		if (event.id ==100297) {
			dstance = false;
		}
		if (event.id ==100700) {
			staggerCounter = false;
		}
		if (event.id ==104100) {
			spiral = false;
		}
	});

	dispatch.hook('S_DEFEND_SUCCESS', 3, (event) => {
		if (!enabled) { return };
		if (event.gameId === cid) {
			if (dstance && lastSkill == SKILL_TOB) {
				disabSkill[SKILL_BD] = false;
				tbBlockActive =1;
			}
			if (dstance && lastSkill == SKILL_ROB) {
				disabSkill[SKILL_BD] = false;
				lazyBlockActive =1;
			}
			if (dstance && lastSkill == SKILL_BD && !falsestart) {
				disabSkill[SKILL_BD] = false;
				lazyBlockActive =1;
			}
			if (dstance && lastSkill == SKILL_SCYTHE) {
				disabSkill[SKILL_BD] = false;
				lazyBlockActive =1;
			}
			if (dstance && (lastSkill == SKILL_STORM_CRASH_EX || lastSkill == (SKILL_STORM_CRASH_EX +31))) {
				disabSkill[SKILL_BD] = false;
				lazyBlockActive =1;
			}
			bdBlockActive =1;
			if (dstance && lastSkill == SKILL_BD && falsestart){
				return false;
			}
		}
	});


	dispatch.hook('C_PRESS_SKILL', 4, (event) => {
		if (!enabled) return;
		lastSkillDelay =999999;
		if (buzz1 && event.skill.id != SKILL_ROLL) {
			return false;
		}
		if (buzz5 && event.skill.id != SKILL_ROLL) {
			return false;
		}
		if (event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2) {
			clearTimeout(ss1);
			clearTimeout(ss2);
			disabSkill[SKILL_SPIRAL_SLASH_EX] = false;
			disabSkill[SKILL_SPIRAL_SLASH_EX_2] = false;
		}
		if(event.skill.id != SKILL_CHARGING){
			clearTimeout(charging1);
			disabSkill[SKILL_CHARGING] = false;
		}
		if (job == JOB_WARRIOR && event.skill.id == SKILL_BLOCK && event.press == false && dstance) {
			clearTimeout(blockX);
			blockX = setTimeout(function () { blockActive = 0; },1000);
			instantBlockActive =0;
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 10,
				id: atkid[event.skill.id],
			});
		}
		if (job == JOB_WARRIOR && event.skill.id == SKILL_BLOCK && event.press == true && dstance) {
			clearTimeout(autoTimer);
			clearTimeout(buzz2);
			buzz1 = false;
			buzz5 = false;
			disabSkill[S_P] = false;
			disabSkill[S_P2] = false;
			disabSkill[S_P3] = false;
			disabSkill[S_P4] = false;
			zoKk =0;
			blockActive =1;
			bdBlockActive =0;
			instantBlockActive =1;
			clearTimeout(blockX);
			collisionLocX = false;
			collisionLocY = false;
			collisionLocZ = false;
			force_end(lastEvent,6);
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			clearTimeout(bDLock);
			clearTimeout(scytheLock);
			clearTimeout(rollLock);
			clearTimeout(tOBLock);
			disabSkill[SKILL_ROLL] = false;
			disabSkill[SKILL_SCYTHE] = false;
			disabSkill[SKILL_BD] = false;
			disabSkill[SKILL_ROB] = false;
			disabSkill[SKILL_TOB] = false;
			disabSkill[SKILL_REAPING] = false;
			disabSkill[SKILL_TC] = false;
			disabSkill[SKILL_COMBATIVE_STRIKE] = false;
			disabSkill[SKILL_PB] = false;
			if (timer[lastSkill]) {
				clearTimeout(timer[lastSkill]);
			}
			if (finish[SKILL_RISING_FURY_1] == false && !cancelAdvanced) {
				setTimeout(function (event) {
					if (finish[SKILL_RISING_FURY_2] != false && instantBlockActive ==1) {
						atkid[event.skill.id] = atkid_base;
						atkid_base--;
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
					}
				}, 200, event);
			}
			else {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
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
			}
		}
		if (event.press == true && dstance) {
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
	});

	dispatch.hook('C_START_SKILL', 7, (event) => {
		if (!enabled) return;
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		lastSkillDelay =999999;
		if (lastSkill == SKILL_DFA && finish[lastSkill] == false && event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2 && event.skill.id != SKILL_STORM_CRASH_EX) { return false; }
		if (lastSkill == SKILL_TEMPEST_RUSH_EX && truefinish[lastSkill] == false && event.skill.id == SKILL_STORM_CRASH_EX) { return false; }
		if (job == JOB_WARRIOR && (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) && (lastSkill == SKILL_SPIRAL_SLASH_EX || lastSkill == SKILL_SPIRAL_SLASH_EX_2) && (disabSkill[SKILL_SPIRAL_SLASH_EX] || disabSkill[SKILL_SPIRAL_SLASH_EX_2])) {
			return false;
		}
		if(lastSkill == SKILL_CHARGING && (event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2 && event.skill.id != SKILL_DFA && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_STORM_CRASH_EX && event.skill.id != SKILL_CHARGING_2) && finish[lastSkill] == false){
			return false;
		}
		if (buzz1 && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_DFA) {
			return false;
		}
		if (buzz3 && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_DFA) {
			return false;
		}
		if (buzz5 && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_DFA) {
			return false;
		}
		if ((event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) && blockwaltz) {
			return false;
		}
		if (!(event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2)) {
			blockwaltz = false;
		}
		if((event.skill.id == SKILL_ROB || event.skill.id == SKILL_TC || event.skill.id == SKILL_REAPING) && (lastSkill == SKILL_REAPING || lastSkill == (SKILL_STORM_CRASH_EX +31) || lastSkill == SKILL_SCYTHE) && finish[lastSkill] == false){
			return false;
		}
		/*
		if ((event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) && disabSkill[699]) {
			return false;
		}*/
		if (event.skill.id == SKILL_TEMPEST_RUSH_EX && (lastSkill != SKILL_SCYTHE && lastSkill != SKILL_ROLL && lastSkill != (SKILL_STORM_CRASH_EX +31)) && truefinish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == SKILL_TEMPEST_RUSH_EX && backstabActive == true) {
			return false;
		}
		if (finish[SKILL_RISING_FURY_2] == false && lastSkill == SKILL_RISING_FURY_2 && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_DFA && event.skill.id != SKILL_BD && event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2 && event.skill.id != SKILL_STORM_CRASH_EX) {
			return false;
		}
		if (lastSkill == SKILL_STORM_CRASH_EX && /*event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2 &&*/ event.skill.id != SKILL_DFA && event.skill.id != SKILL_ROLL && event.skill.id != SKILL_STORM_CRASH_EX && !(lazyBlockActive == 1 && event.skill.id == SKILL_BD) && truefinish[lastSkill] == false) {
			return false;
		}
		if ((event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) && (lastSkill == SKILL_TEMPEST_RUSH_EX || lastSkill == SKILL_STORM_CRASH_EX || lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4) && truefinish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == SKILL_SCYTHE && (lastSkill == SKILL_SCYTHE || lastSkill == SKILL_REAPING || lastSkill == SKILL_TEMPEST_RUSH_EX) && finish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == SKILL_SCYTHE && (lastSkill == (SKILL_STORM_CRASH_EX +31)) && truefinish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == SKILL_ROB && (lastSkill == SKILL_TEMPEST_RUSH_EX) && truefinish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == SKILL_BATTLE_CRY && (lastSkill == SKILL_VORTEX_EX || lastSkill == SKILL_VORTEX_EX_2) && finish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == SKILL_INFURIATE && (lastSkill == SKILL_VORTEX_EX || lastSkill == SKILL_VORTEX_EX_2) && finish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2) {
			clearTimeout(ss1);
			clearTimeout(ss2);
			disabSkill[SKILL_SPIRAL_SLASH_EX] = false;
			disabSkill[SKILL_SPIRAL_SLASH_EX_2] = false;
		}
		if (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2 || event.skill.id == SKILL_STORM_CRASH_EX) {
			clearTimeout(reapLock);
			clearTimeout(roBLock);
			clearTimeout(tCLock);
			clearTimeout(bDLock);
			clearTimeout(scytheLock);
			clearTimeout(rollLock);
			clearTimeout(tOBLock);
			disabSkill[SKILL_ROLL] = false;
			disabSkill[SKILL_SCYTHE] = false;
			disabSkill[SKILL_BD] = false;
			disabSkill[SKILL_ROB] = false;
			disabSkill[SKILL_TOB] = false;
			disabSkill[SKILL_REAPING] = false;
			disabSkill[SKILL_TC] = false;
		}
		if(event.skill.id != SKILL_CHARGING){
			clearTimeout(charging1);
			disabSkill[SKILL_CHARGING] = false;
		}
		if (instantBlockActive == 1 && event.skill.id != SKILL_BD && event.skill.id != SKILL_FLANKER) { return false; }
		let xxyyzz = false;
		if (!disabSkill[event.skill.id] || (unlockAll && event.skill.id != lastSkill)) {
			unlockAll = false;
			if (event.skill.id != SKILL_ROB && event.skill.id != SKILL_REAPING && event.skill.id != SKILL_TC && lastSkill == SKILL_COMBATIVE_STRIKE && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_ROB && event.skill.id != SKILL_REAPING && event.skill.id != SKILL_TC && lastSkill == SKILL_COMBATIVE_STRIKE_2 && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_SCYTHE && event.skill.id != SKILL_TC && lastSkill == SKILL_PB && cancelAdvanced) {
				xxyyzz = true;
			}
			if (lastSkill == SKILL_RISING_FURY_1 && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_BD && lastSkill == SKILL_RISING_FURY_2 && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_BD && lastSkill == SKILL_VORTEX && cancelAdvanced) {
				xxyyzz = true;
			}
			if (lastSkill == SKILL_REAPING && cancelAdvanced) {
				xxyyzz = true;
			}
			if (lastSkill == (SKILL_STORM_CRASH_EX +31) && event.skill.id != SKILL_TEMPEST_RUSH_EX && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_TEMPEST_RUSH_EX && lastSkill == SKILL_SCYTHE && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_SCYTHE && event.skill.id != SKILL_REAPING && lastSkill == SKILL_ROB && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_SCYTHE && lastSkill == SKILL_BD && cancelAdvanced) {
				xxyyzz = true;
			}
			if (event.skill.id != SKILL_ROB && lastSkill == SKILL_CASCADE && cancelAdvanced) {
				xxyyzz = true;
			}
			if ((event.skill.id != SKILL_BD || (event.skill.id == SKILL_BD && tbBlockActive ==0)) && lastSkill == SKILL_TOB && cancelAdvanced) {
				xxyyzz = true;
			}
			if (lastSkill == SKILL_BATTLE_CRY && cancelAdvanced) {
				xxyyzz = true;
			}
			if (lastSkill == SKILL_INFURIATE && cancelAdvanced) {
				xxyyzz = true;
			}
			if (lastSkill == SKILL_BACKSTAB && cancelAdvanced) {
				xxyyzz = true;
			}
			if (xxyyzz == true) {
				cancelAdvanced = false;
				disabSkill = [];
				dispatch.toServer('C_PRESS_SKILL', 4, {
					skill: SKILL_BLOCK,
					press: true,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
				//setTimeout(function(event){
				dispatch.toServer('C_PRESS_SKILL', 4, {
					skill: SKILL_BLOCK,
					press: false,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});//}, 1, event);
			}
			var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
			if (xzzy /*&& (spiral || (event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2))*/ && event.skill.id != SKILL_FLANKER && event.skill.id != SKILL_STORM_CRASH_EX && event.skill.id != SKILL_RETALIATE && (event.skill.id != SKILL_ROLL/* || (event.skill.id == SKILL_ROLL && myRE >379)*/)) {
				if(spiral || (event.skill.id != SKILL_SPIRAL_SLASH_EX && event.skill.id != SKILL_SPIRAL_SLASH_EX_2)){
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				if(!((event.skill.id == SKILL_BD || event.skill.id == SKILL_ROB) && dstance)){
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 125, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 175, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				}
				}
			}
			if ((event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) && !spiral) {
				setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},15);
				//setTimeout(function(){dispatch.toServer('C_START_SKILL', 7, event);},50);
			}
			msgSuppress =0;
			if (job == JOB_WARRIOR && event.skill.id == SKILL_DEADLY_GAMBLE) {
				clearTimeout(dgActive2);
				dgActive = true;
				if (glyphState[21106] == 1 || glyphState[21091] ==1) {
					dgActive2 = setTimeout(function () { dgActive = false; },24000);
				}
				else {
					dgActive2 = setTimeout(function () { dgActive = false; },20000);
				}
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_DEADLY_GAMBLE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, SKILL_DEADLY_GAMBLE_DURATION,0);
				if (DG_X) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_BATTLE_CRY) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BATTLE_CRY] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_BATTLE_CRY_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_BATTLE_CRY_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_BATTLE_CRY_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_BATTLE_CRY_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_BATTLE_CRY_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_BATTLE_CRY_DURATION);
				if (SHOUTCANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						if (lastSkill != SKILL_BATTLE_CRY) { return; }
						force_end(event,10);
						unlockAll = true;
					}, SHOUTCANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_INFURIATE && dstance) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_INFURIATE] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_INFURIATE_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_INFURIATE_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_INFURIATE_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_INFURIATE_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_INFURIATE_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_INFURIATE_DURATION);
				if (ENRAGECANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						if (lastSkill != SKILL_INFURIATE) { return; }
						force_end(event,10);
						unlockAll = true;
					}, ENRAGECANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_SMOKE_AGG) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_SMOKE_AGG] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, SKILL_SMOKE_AGG_DURATION,0);
			}

			if (job == JOB_WARRIOR && event.skill.id == S_P) {
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

			if (job == JOB_WARRIOR && event.skill.id == S_P) {
				disabSkill[event.skill.id] = true;
				autoTimer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_D / aspd);
			}

			if (job == JOB_WARRIOR && event.skill.id == S_P2) {
				disabSkill[event.skill.id] = true;
				autoTimer = setTimeout(function () { disabSkill[S_P2] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P2_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D / aspd);
			}
			if (job == JOB_WARRIOR && event.skill.id == S_P3) {
				disabSkill[event.skill.id] = true;
				autoTimer = setTimeout(function () { disabSkill[S_P3] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P3_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D / aspd);
			}
			if (job == JOB_WARRIOR && event.skill.id == S_P4) {
				disabSkill[event.skill.id] = true;
				autoTimer = setTimeout(function () { disabSkill[S_P4] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, S_P4_D);
				clearTimeout(clearPunchCounter);
				punchCounter =0;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P4_D / aspd);
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_RISING_FURY_1) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_RISING_FURY_1] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_RISING_FURY_1_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_RISING_FURY_1_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_RISING_FURY_1_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_RISING_FURY_1_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_RISING_FURY_1_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_RISING_FURY_1_DURATION, SKILL_RISING_FURY_1_DISTANCE);
				if (RFCANCEL_DELAY > 0 && dstance && event.moving ==0) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						if (lastSkill != SKILL_RISING_FURY_1) { return; }
						force_end(event,10);
						unlockAll = true;
					}, RFCANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_RISING_FURY_2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_RISING_FURY_2] = false; }, GLOBAL_LOCK_DELAY);
				//disabSkill[SKILL_SCYTHE] = true;
				//scytheLock = setTimeout(function(){disabSkill[SKILL_SCYTHE] = false;}, SKILL_RISING_FURY_2_DURATION/aspd);
				//disabSkill[SKILL_REAPING] = true;
				//reapLock = setTimeout(function(){disabSkill[SKILL_REAPING] = false;}, SKILL_RISING_FURY_2_DURATION/aspd);
				//disabSkill[SKILL_ROB] = true;
				//roBLock = setTimeout(function(){disabSkill[SKILL_ROB] = false;}, SKILL_RISING_FURY_2_DURATION/aspd);
				//disabSkill[SKILL_TC] = true;
				//tCLock = setTimeout(function(){disabSkill[SKILL_TC] = false;}, SKILL_RISING_FURY_2_DURATION/aspd);
				fakeEnd_sorc_dist(event, SKILL_RISING_FURY_2_DURATION, SKILL_RISING_FURY_2_DISTANCE);
				if (RF2CANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						if (lastSkill != SKILL_RISING_FURY_2) { return; }
						force_end(event,10);
						unlockAll = true;
					}, RF2CANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_COMBATIVE_STRIKE || event.skill.id == SKILL_COMBATIVE_STRIKE_2)) {
				disabSkill[SKILL_COMBATIVE_STRIKE] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_COMBATIVE_STRIKE] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_COMBATIVE_STRIKE_2] = true;
				var timer2 = setTimeout(function () { disabSkill[SKILL_COMBATIVE_STRIKE_2] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_COMBATIVE_STRIKE_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_COMBATIVE_STRIKE_DURATION / aspd);
				disabSkill[SKILL_ROB] = false;
				clearTimeout(roBLock);
				fakeEnd_sorc_dist(event, SKILL_COMBATIVE_STRIKE_DURATION, SKILL_COMBATIVE_STRIKE_DISTANCE);
				if (CSCANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						if (lastSkill != SKILL_COMBATIVE_STRIKE && lastSkill != SKILL_COMBATIVE_STRIKE_2) { return; }
						force_end(event,10);
						unlockAll = true;
					}, CSCANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_STAGGER_COUNTER && staggerCounter && !dstance) {
				disabSkill[event.skill.id] = true;
				setTimeout(function () { disabSkill[SKILL_STAGGER_COUNTER] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_STAGGER_COUNTER_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_STAGGER_COUNTER_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_STAGGER_COUNTER_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_STAGGER_COUNTER_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_STAGGER_COUNTER_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_STAGGER_COUNTER_DURATION,0);
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_REAPING && finish[SKILL_CHARGING] == true && backstabActive == false) {
				disabSkill[event.skill.id] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, SKILL_REAPING_DURATION,0);
				if (zzz ==0) {
					if (REAPINGCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_REAPING) { return; }
							force_end(event,10);
							unlockAll = true;
						}, REAPINGCANCEL_DELAY / aspd, event);
					}
				}
				if (zzz ==30) {
					if (CHAINREAPINGCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_REAPING) { return; }
							force_end(event,10);
							unlockAll = true;
						}, CHAINREAPINGCANCEL_DELAY / aspd, event);
					}
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_TOB) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TOB] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_TOB_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_TOB_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_TOB_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_TOB_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_TOB_DURATION / aspd);
				tbBlockActive =0;
				fakeEnd_sorc_dist(event, SKILL_TOB_DURATION, SKILL_TOB_DISTANCE);
				if (TOBCANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						if (lastSkill != SKILL_TOB) { return; }
						force_end(event,10);
						unlockAll = true;
					}, TOBCANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_ROB && finish[SKILL_CHARGING] == true && backstabActive == false) {
				if (ROB_LOCK) {
					clearTimeout(buzz4);
					buzz5 = true;
					buzz6 = setTimeout(function () { buzz5 = false; }, ROB_LOCK_DURATION / aspd);
				}
				clearTimeout(bDLock);
				clearTimeout(tCLock);
				disabSkill[event.skill.id] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_ROB_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_ROB_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_ROB_DURATION, SKILL_ROB_DISTANCE);
				if (zzz ==0) {
					if (RAWROBCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_ROB) { return; }
							force_end(event,10);
							unlockAll = true;
						}, RAWROBCANCEL_DELAY / aspd, event);
					}
				}
				if (zzz ==30) {
					if (CHAINROBCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_ROB) { return; }
							force_end(event,10);
							unlockAll = true;
						}, CHAINROBCANCEL_DELAY / aspd, event);
					}
				}
				if (zzz == (SKILL_ROB_3 - SKILL_ROB)) {
					if (RAWROBCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_ROB) { return; }
							force_end(event,10);
							unlockAll = true;
						}, (RAWROBCANCEL_DELAY +100) / aspd, event);
					}
				}
				if (zzz == (SKILL_ROB_3 - SKILL_ROB +30)) {
					if (CHAINROBCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_ROB) { return; }
							force_end(event,10);
							unlockAll = true;
						}, (CHAINROBCANCEL_DELAY +100) / aspd, event);
					}
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_SCYTHE && finish[SKILL_CHARGING] == true && backstabActive == false) {
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_SCYTHE_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_SCYTHE_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_SCYTHE_DURATION / aspd);
				disabSkill[event.skill.id] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, SKILL_SCYTHE_DURATION, SKILL_SCYTHE_DISTANCE);
				if (zzz == 0 || zzz == (SKILL_SCYTHE_3 - SKILL_SCYTHE)) {
					if (RAWSCYTHECANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_SCYTHE) { return; }
							force_end(event,10);
							unlockAll = true;
						}, RAWSCYTHECANCEL_DELAY / aspd, event);
					}
				}
				if (zzz == 30 || zzz == (SKILL_SCYTHE_3 - SKILL_SCYTHE +30)) {
					if (CHAINSCYTHECANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							if (lastSkill != SKILL_SCYTHE) { return; }
							force_end(event,10);
							unlockAll = true;
						}, CHAINSCYTHECANCEL_DELAY / aspd, event);
					}
				}
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2)) {
				disabSkill[SKILL_SPIRAL_SLASH_EX] = true;
				disabSkill[SKILL_SPIRAL_SLASH_EX_2] = true;
				ss1 = setTimeout(function () { disabSkill[SKILL_SPIRAL_SLASH_EX] = false; },0);
				ss2 = setTimeout(function () { disabSkill[SKILL_SPIRAL_SLASH_EX_2] = false; },0);
				clearTimeout(walter);
				if (!DISABLE_WALTZ) {
					disabSkill[699] = true;
				}
				walter = setTimeout(function () { disabSkill[699] = false; }, (1280 / aspd));
				if (WALTZ_LOCK >0) {
					clearTimeout(walter);
					walter = setTimeout(function () { disabSkill[699] = false; }, WALTZ_LOCK);
				}
				clearTimeout(bDLock);
				disabSkill[SKILL_BD] = false;
				/*if(spiral){
				clearTimeout(spiral2);
				spiral = false;
				}
				else{
				spiral = true;
				spiral2 = setTimeout(function(){spiral = false;},8000);
				}*/
				fakeEnd_sorc_dist(event, SKILL_SPIRAL_SLASH_EX_DURATION, SKILL_SPIRAL_SLASH_EX_DISTANCE);
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_STORM_CRASH_EX)) {
				if (lastSkill == SKILL_STORM_CRASH_EX && finish[lastSkill] == false) {
					disabSkill[SKILL_STORM_CRASH_EX] = true;
					setTimeout(function () { disabSkill[SKILL_STORM_CRASH_EX] = false; }, GLOBAL_LOCK_DELAY);
					setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 125, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 175, event);
				setTimeout(function (event) { if (lastSkill == (SKILL_STORM_CRASH_EX +31)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
					event.skill.id = (SKILL_STORM_CRASH_EX +31);
					fakeEnd_sorc_dist(event, SKILL_STORM_CRASH_EX_DURATION_2, SKILL_STORM_CRASH_EX_DISTANCE_2);
					if (AERIALCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							force_end(event,10);
							unlockAll = true;
						}, AERIALCANCEL_DELAY / aspd, event);
					}
				}
				else {
					if (AS_LOCK && !(dgActive && AS_LOCK_DG_IGNORE)) {
						clearTimeout(buzz4);
						setTimeout(function(){buzz3 = true;}, 200 / aspd);
						buzz4 = setTimeout(function () { buzz3 = false; }, AS_LOCK_DURATION / aspd);
					}
					fakeEnd_sorc_dist(event, SKILL_STORM_CRASH_EX_DURATION, SKILL_STORM_CRASH_EX_DISTANCE);
				}
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TEMPEST_RUSH_EX)) {
				disabSkill[SKILL_TEMPEST_RUSH_EX] = true;
				setTimeout(function () { disabSkill[SKILL_TEMPEST_RUSH_EX] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc_dist(event, SKILL_TEMPEST_RUSH_EX_DURATION, SKILL_TEMPEST_RUSH_EX_DISTANCE);
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_BD && backstabActive == false) {
				falsestart = true;
				if (finish[SKILL_CHARGING] == false) {
					return false;
				}
				if (BD_LOCK) {
					clearTimeout(buzz2);
					buzz1 = true;
					buzz2 = setTimeout(function () { buzz1 = false; }, BD_LOCK_DURATION / aspd);
				}
				clearTimeout(reapLock);
				clearTimeout(roBLock);
				clearTimeout(tCLock);
				disabSkill[SKILL_SCYTHE] = false;
				disabSkill[event.skill.id] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, BD_LOCK_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_BD_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_BD_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_BD_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_BD_DURATION, SKILL_BD_DISTANCE);
				instantBlockActive =0;
				blockActive =0;
				if (zzz ==0) {
					if (RAWBDCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							force_end(event,10);
							unlockAll = true;
						}, RAWBDCANCEL_DELAY / aspd, event);
					}
				}
				if (zzz ==30) {
					if (CHAINBDCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							force_end(event,10);
							unlockAll = true;
						}, CHAINBDCANCEL_DELAY / aspd, event);
					}
				}
				if (zzz == (SKILL_BD_3 - SKILL_BD)) {
					if (RAWBDCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							force_end(event,10);
							unlockAll = true;
						}, (RAWBDCANCEL_DELAY +100) / aspd, event);
					}
				}
				if (zzz == (SKILL_BD_3 - SKILL_BD +30)) {
					if (CHAINBDCANCEL_DELAY > 0 && dstance) {
						cancelAdvanced = true;
						setTimeout(function (event) {
							force_end(event,10);
							unlockAll = true;
						}, (CHAINBDCANCEL_DELAY +100) / aspd, event);
					}
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_DFA) {
				vortexActive = true;
				clearTimeout(reapLock);
				clearTimeout(roBLock);
				clearTimeout(tCLock);
				clearTimeout(bDLock);
				clearTimeout(tCLock);
				clearTimeout(vortexTimer);
				vortexTimer = setTimeout(function () { vortexActive = false; },5000);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_DFA] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_ROLL] = true;
				rollLock = setTimeout(function () { disabSkill[SKILL_ROLL] = false; }, SKILL_DFA_DURATION / aspd);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_DFA_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_DFA_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_DFA_DURATION / aspd);
				disabSkill[SKILL_TOB] = true;
				tOBLock = setTimeout(function () { disabSkill[SKILL_TOB] = false; }, SKILL_DFA_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_DFA_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_DFA_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_DFA_DURATION);
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_TC && finish[SKILL_CHARGING] == true && backstabActive == false) {
				clearTimeout(reapLock);
				clearTimeout(roBLock);
				clearTimeout(scytheLock);
				clearTimeout(bDLock);
				disabSkill[SKILL_BD] = false;
				disabSkill[event.skill.id] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_TC_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_TC_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_TC_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_TC_DURATION, SKILL_TC_DISTANCE);
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_PB) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_PB] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_PB_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_PB_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_PB_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_PB_DURATION);
				if (PBCANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						force_end(event,10);
						unlockAll = true;
					}, PBCANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_RETALIATE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_RETALIATE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_sorc(event, SKILL_RETALIATE_DURATION);
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_VORTEX_EX || event.skill.id == SKILL_VORTEX_EX_2)) {
				disabSkill[SKILL_VORTEX_EX] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_VORTEX_EX] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_VORTEX_EX_2] = true;
				var timer2 = setTimeout(function () { disabSkill[SKILL_VORTEX_EX_2] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_VORTEX_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_VORTEX_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_VORTEX_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_VORTEX_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_VORTEX_DURATION);
				if (VORTEXCANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						force_end(event,10);
						unlockAll = true;
					}, VORTEXCANCEL_DELAY / aspd, event);
				}
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_LEAPING) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_LEAPING] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_LEAPING_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_LEAPING_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_LEAPING_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_LEAPING_DURATION, SKILL_LEAPING_DISTANCE);
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_ROLL) {
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == event.skill.id) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				backstabActive = false;
				clearTimeout(reapLock);
				clearTimeout(roBLock);
				clearTimeout(bDLock);
				clearTimeout(tCLock);
				clearTimeout(scytheLock);
				if (myRE < 380 && !talentState[810230]) {
					return false;
				}
				else if (talentState[810230] && (myRE < (380 - 10 - talentState[810230] *2))){
					return false;
				}
				else {
					vortexActive = true;
					disabSkill[SKILL_SCYTHE] = false;
					clearTimeout(vortexTimer);
					vortexTimer = setTimeout(function () { vortexActive = false; },5000);
					disabSkill[event.skill.id] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_ROLL] = false; }, SKILL_ROLL_DURATION / aspd);
					disabSkill[SKILL_VORTEX] = true;
					setTimeout(function () { disabSkill[SKILL_VORTEX] = false; }, SKILL_ROLL_DURATION / aspd);
					disabSkill[SKILL_DFA] = true;
					setTimeout(function () { disabSkill[SKILL_DFA] = false; }, SKILL_ROLL_DURATION / aspd);
					disabSkill[SKILL_REAPING] = true;
					reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_ROLL_DURATION / aspd);
					disabSkill[SKILL_ROB] = true;
					roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_ROLL_DURATION / aspd);
					disabSkill[SKILL_BD] = true;
					bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_ROLL_DURATION / aspd);
					disabSkill[SKILL_TC] = true;
					tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_ROLL_DURATION / aspd);
					fakeEnd_sorc_dist(event, SKILL_ROLL_DURATION, SKILL_ROLL_DISTANCE);
				}
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_CHARGING_2) {
				fakeEnd_sorc(event, SKILL_CHARGING_2_DURATION);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_CHARGING_2_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_CHARGING_2_DURATION / aspd);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_CHARGING_2_DURATION / aspd);
				disabSkill[SKILL_ROB] = true;
				roBLock = setTimeout(function () { disabSkill[SKILL_ROB] = false; }, SKILL_CHARGING_2_DURATION / aspd);
				clearTimeout(roz1);
				clearTimeout(roz2);
				disabSkill[SKILL_PB] = true;
				setTimeout(function () { disabSkill[SKILL_PB] = false; }, SKILL_CHARGING_2_DURATION / aspd);
				disabSkill[SKILL_COMBATIVE_STRIKE] = true;
				setTimeout(function () { disabSkill[SKILL_COMBATIVE_STRIKE] = false; }, SKILL_CHARGING_2_DURATION / aspd);
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_CASCADE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CASCADE] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_CASCADE_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_CASCADE_DURATION / aspd);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_CASCADE_DURATION / aspd);
				disabSkill[SKILL_TC] = true;
				tCLock = setTimeout(function () { disabSkill[SKILL_TC] = false; }, SKILL_CASCADE_DURATION / aspd);
				fakeEnd_sorc(event, SKILL_CASCADE_DURATION);
				if (CASCADECANCEL_DELAY > 0 && dstance) {
					cancelAdvanced = true;
					setTimeout(function (event) {
						force_end(event,10);
						unlockAll = true;
					}, CASCADECANCEL_DELAY / aspd, event);
				}
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_POUNCE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_POUNCE] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_REAPING] = true;
				reapLock = setTimeout(function () { disabSkill[SKILL_REAPING] = false; }, SKILL_POUNCE_DURATION / aspd);
				disabSkill[SKILL_SCYTHE] = true;
				scytheLock = setTimeout(function () { disabSkill[SKILL_SCYTHE] = false; }, SKILL_POUNCE_DURATION / aspd);
				disabSkill[SKILL_BD] = true;
				bDLock = setTimeout(function () { disabSkill[SKILL_BD] = false; }, SKILL_POUNCE_DURATION / aspd);
				fakeEnd_sorc_dist(event, SKILL_POUNCE_DURATION,100);
			}
		}
		lastLastSkill = lastSkill;
		lastSkill = event.skill.id;
		lastEvent = event;
		if (lastSkill == SKILL_SPIRAL_SLASH_EX && WALTZ_AUTO_BD) {
		  setTimeout(function () {
			  if(!WALTZ_AUTO_BD_ONLY_DG || dgActive){
			failsafe =0;
			repeater(BD_KEY, SKILL_SPIRAL_SLASH_EX);
			  }
		  },0);
		}
		if (lastSkill == SKILL_SPIRAL_SLASH_EX_2 && WALTZ_AUTO_BD) {
		  setTimeout(function () {
			  if(!WALTZ_AUTO_BD_ONLY_DG || dgActive){
			failsafe =0;
			repeater(BD_KEY, SKILL_SPIRAL_SLASH_EX_2);
			  }
		  },0);
		}
		if (lastSkill == SKILL_TEMPEST_RUSH_EX && BLADE_FRENZY_AUTO_DODGE) {
		  setTimeout(function () {
			failsafe =0;
			repeater(DODGE_KEY, SKILL_TEMPEST_RUSH_EX);
		  }, BLADE_FRENZY_AUTO_DODGE_DELAY / aspd);
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

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67115273);
		if (!enabled) return;
		if (event.gameId === cid) {
			var d = new Date();
			lastSkillTime[1] = d.getTime();
			lastSkillTime[3] = event.skill.id;
			var xzzy = event.skill.type ===1;
			if (!xzzy) {
				lastSkill =1;
			}

			if (job == JOB_WARRIOR && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_DEADLY_GAMBLE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_BATTLE_CRY)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_INFURIATE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SMOKE_AGG)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_RISING_FURY_1)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_RISING_FURY_2)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_COMBATIVE_STRIKE || event.skill.id == SKILL_COMBATIVE_STRIKE_2)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_STAGGER_COUNTER)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_REAPING || event.skill.id == SKILL_REAPING_2)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TOB)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_ROB || event.skill.id == SKILL_ROB_2 || event.skill.id == SKILL_ROB_3 || event.skill.id == SKILL_ROB_4)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_BD || event.skill.id == SKILL_BD_2 || event.skill.id == SKILL_BD_3 || event.skill.id == SKILL_BD_4)) {
				falsestart = false;
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_DFA)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TC || event.skill.id == SKILL_TC_2 || event.skill.id == SKILL_TRAVERSE_DS || event.skill.id == (SKILL_TRAVERSE_DS +30))) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_PB)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_RETALIATE)) {
				if (Ignore1) {
					fakeEnd_sorc(event, SKILL_RETALIATE_DURATION);
					lastSkill = SKILL_RETALIATE;
				}
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_VORTEX)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_LEAPING)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_CASCADE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_POUNCE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SCYTHE || event.skill.id == SKILL_SCYTHE_2 || event.skill.id == SKILL_SCYTHE_3 || event.skill.id == SKILL_SCYTHE_4)) {
				return false;
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_ROLL) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING_2)) {
				return false;
			}
			if (job == JOB_WARRIOR && (event.skill.id == SKILL_BACKSTAB)) {
				//backstabActive = true;
				clearTimeout(RecheckTimer);
				if (DISABLE_BACKSTAB == false) {
					return false;
				}
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_BLOCK) {
				return false;
			}
			if (job == JOB_WARRIOR && (event.skill.id == SKILL_VORTEX_EX || event.skill.id == SKILL_VORTEX_EX_2)) {
				return false;
			}
			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2)) {
				if (DISABLE_WALTZ) { return; }
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == (SKILL_SPIRAL_SLASH_EX +2) || event.skill.id == (SKILL_SPIRAL_SLASH_EX_2 +2))) {
				if (DISABLE_WALTZ) { return; }
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == (SKILL_SPIRAL_SLASH_EX +1) || event.skill.id == (SKILL_SPIRAL_SLASH_EX_2 +1))) {
				if (DISABLE_WALTZ) { return; }
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_STORM_CRASH_EX || event.skill.id == (SKILL_STORM_CRASH_EX +30) || (event.skill.id == SKILL_STORM_CRASH_EX +31))) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TEMPEST_RUSH_EX || event.skill.id == (SKILL_TEMPEST_RUSH_EX +30))) {
				var newX;
				var newY;
				var angle = parseFloat(event.w);
				try {
					collisionLocX2 = Math.cos(angle) * event.movement[0].distance + event.loc.x;
					collisionLocY2 = Math.sin(angle) * event.movement[0].distance + event.loc.y;
				}
				catch (e) { }
				collisionLocZ2 = event.loc.z;
				return false;
			}
			collisionLocX = false;
			collisionLocY = false;
			collisionLocZ = false;
		}
	});

	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108487) console.log("error");
		if (!enabled) return;
		if (event.gameId === cid) {
			var d = new Date();
			lastSkillTime[2] = d.getTime();
			if (((lastSkillTime[2] - lastSkillTime[1]) > lastLastSkillDelay) && (event.skill.id == lastLastSkill || event.skill.id == lastLastSkill +30) && (lastLastSkill == lastSkillTime[3] || lastLastSkill == (lastSkillTime[3] -30))) {
				if (lastSkill != SKILL_ROLL && lastLastSkill != SKILL_BACKSTAB) {
					clearTimeout(timer[lastSkill]);
				}
				/*RecheckTimer = setTimeout(function(){
				if(lastSkill == SKILL_ROLL || lastLastSkill == SKILL_BACKSTAB){return;}
				dispatch.toClient('S_ACTION_END', 5, lastSkillEvent);}, (lastSkillDelay + lastSkillStart - lastSkillTime[1] - lastLastSkillDelay));*/
			}
			if (job == JOB_WARRIOR && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_DEADLY_GAMBLE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_BATTLE_CRY)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_INFURIATE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SMOKE_AGG)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_RISING_FURY_1)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_RISING_FURY_2)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_COMBATIVE_STRIKE || event.skill.id == SKILL_COMBATIVE_STRIKE_2)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_STAGGER_COUNTER)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_REAPING || event.skill.id == SKILL_REAPING_2)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TOB)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_ROB || event.skill.id == SKILL_ROB_2 || event.skill.id == SKILL_ROB_3 || event.skill.id == SKILL_ROB_4)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_BD || event.skill.id == SKILL_BD_2 || event.skill.id == SKILL_BD_3 || event.skill.id == SKILL_BD_4)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_DFA)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TC || event.skill.id == SKILL_TC_2 || event.skill.id == SKILL_TRAVERSE_DS || event.skill.id == (SKILL_TRAVERSE_DS +30))) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_PB)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_RETALIATE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_VORTEX)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SCYTHE || event.skill.id == SKILL_SCYTHE_2 || event.skill.id == SKILL_SCYTHE_3 || event.skill.id == SKILL_SCYTHE_4)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_LEAPING)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_CASCADE)) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_POUNCE)) {
				return false;
			}

			if (job == JOB_WARRIOR && event.skill.id == SKILL_ROLL) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING_2)) {
				return false;
			}
			if (job == JOB_WARRIOR && (event.skill.id == SKILL_BACKSTAB)) {
				//backstabActive = false;
				if (DISABLE_BACKSTAB == false) {
					return false;
				}
				if (lastSkill != SKILL_BACKSTAB) { return false; }
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_CHARGING) {
				finish[event.skill.id] = true;
			}
			if (job == JOB_WARRIOR && event.skill.id == SKILL_BLOCK) {
				return false;
			}
			if (job == JOB_WARRIOR && (event.skill.id == SKILL_VORTEX_EX || event.skill.id == SKILL_VORTEX_EX_2)) {
				return false;
			}
			if (job == JOB_WARRIOR && (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2)) {
				if (lastSkill != (SKILL_SPIRAL_SLASH_EX) && lastSkill != (SKILL_SPIRAL_SLASH_EX_2)) { return false; }
				if (DISABLE_WALTZ) { return; }
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == (SKILL_SPIRAL_SLASH_EX +2) || event.skill.id == (SKILL_SPIRAL_SLASH_EX_2 +2))) {
				if (lastSkill != (SKILL_SPIRAL_SLASH_EX) && lastSkill != (SKILL_SPIRAL_SLASH_EX_2)) { return false; }
				if (DISABLE_WALTZ) { return; }
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == (SKILL_SPIRAL_SLASH_EX +1) || event.skill.id == (SKILL_SPIRAL_SLASH_EX_2 +1))) {
				if (lastSkill != (SKILL_SPIRAL_SLASH_EX) && lastSkill != (SKILL_SPIRAL_SLASH_EX_2)) { return false; }
				if (DISABLE_WALTZ) { return; }
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_STORM_CRASH_EX || event.skill.id == (SKILL_STORM_CRASH_EX +30) || (event.skill.id == SKILL_STORM_CRASH_EX +31))) {
				return false;
			}

			if (job == JOB_WARRIOR && (event.skill.id == SKILL_TEMPEST_RUSH_EX || event.skill.id == (SKILL_TEMPEST_RUSH_EX +30))) {
				if (((event.loc.z - collisionLocZ2) >50) || ((collisionLocZ2 - event.loc.z) >50)) {
					dispatch.toClient('S_INSTANT_MOVE', 3, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
					});
				}
				return false;
			}
		}
	});

	dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
		if (!enabled) return;
		event.cooldown -= GLOBAL_LATENCY;
		return true;
	});


	dispatch.hook('S_PLAYER_STAT_UPDATE', dispatch.majorPatchVersion >= 93 ? 14 : 13, (event) => {
		if (!enabled) return;
		aspd = (event.attackSpeed + event.attackSpeedBonus) /100;
		if (event.curHp ==0) {
			dgActive = false;
		}
	});

	dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
		if (!enabled) return;
		timeloc = event.time +1;
	});

	dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, (event) => {
		if (!enabled) return;
		collisionLocX = event.loc.x;
		collisionLocY = event.loc.y;
		collisionLocZ = event.loc.z;
		collisionLocX2 = event.loc.x;
		collisionLocY2 = event.loc.y;
		if (event.skill.id == SKILL_STORM_CRASH_EX) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (SKILL_STORM_CRASH_EX +30),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (event.skill.id +1),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == SKILL_TC && dstance) {
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: SKILL_TRAVERSE_DS,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 0, event);
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: SKILL_TRAVERSE_DS,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 100, event);
			return false;
		}
		if (event.skill.id == SKILL_TC_2 && dstance) {
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: (SKILL_TRAVERSE_DS +30),
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 0, event);
			setTimeout(function (event) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: (SKILL_TRAVERSE_DS +30),
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}, 100, event);
			return false;
		}
		setTimeout(function (event) {
			if (event.skill.id == SKILL_STORM_CRASH_EX) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: (SKILL_STORM_CRASH_EX +30),
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			if (event.skill.id == SKILL_SPIRAL_SLASH_EX || event.skill.id == SKILL_SPIRAL_SLASH_EX_2) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: (event.skill.id +1),
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}, 100, event);
		setTimeout(function (event) {
			if (event.skill.id == SKILL_STORM_CRASH_EX) {
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: (SKILL_STORM_CRASH_EX +30),
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
				dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
					skill: event.skill.id,
					stage: event.stage,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
				});
			}
		}, 200, event);
		//return false;
	});
	dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 4, (event) => {
		if (!enabled) return;
		collisionLocX = event.loc.x;
		collisionLocY = event.loc.y;
		collisionLocZ = event.loc.z;
		collisionLocX2 = event.loc.x;
		collisionLocY2 = event.loc.y;
		setTimeout(function (event) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_DASH', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
			clearTimeout(timer[SKILL_CHARGING]);
			if (lastSkill == SKILL_CHARGING) {
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
		}, 100, event);
		//return false;
	});
	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67115273);
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[SKILL_RETALIATE] = true;
			Ignore1 = true;
		}
	});
	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108487) console.log("error");
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[SKILL_RETALIATE] = false;
			clearTimeout(Ignore2);
			Ignore2 = setTimeout(function () { Ignore1 = false; },400);
		}
	});
};