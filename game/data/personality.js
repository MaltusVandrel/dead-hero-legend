var EXPRESSIONS={
    INNOVATION:{label:"Innovation",description:"Someone who captivate with inventiveness.",adjective:"Creative"},
    PASSION:{label:"Passion",description:"Someone who connect with emotion.",adjective:"Passionate"},
    POWER:{label:"Power",description:"Someone who lead with assertiveness.",adjective:"Powerful"},
    PRESTIGE:{label:"Prestige",description:"Someone who set a higher standard.",adjective:"Elegant"},
    TRUST:{label:"Trust",description:"Someone who earn respect by stability.",adjective:"Reliable"},
    CUNNING:{label:"Cunning",description:"Someone who communicate meaningfully.",adjective:"Clever"},
    KEEN:{label:"Keen",description:"Someone who prevent mistakes with attention",adjective:"Meticulous"},
    main:function(character){
        if(!character)character=GAME.main
        var key=character.personality.expression.main;
        return {...EXPRESSIONS[key],key:key};
    },
    auxiliar:function(character){
        if(!character)character=GAME.main;
        var key=character.personality.expression.auxiliar;
        return {...EXPRESSIONS[key],key:key};
    },

};
var OBJECTIVES={
    SOCIAL:{
        label:"Social",description:"Someone who craves to live in society and bond with peers",
        approaches:{
            BELONGING:{
                label:"Belonging",
                classification:"Citizen"            
            }, 
            JOY:{
                label:"Joy",
                classification:"Jester"
            }, 
            INTIMACY:{
                label:"Intimacy",
                classification:"Lover"
            }
        }
    },
    EGO:{label:"Legacy",description:"Someone who craves to make a Legacy and be remembered",
    approaches:{
        CHANGE:{
            label:"Change",
            classification:"Rebel"            
        }, 
        POWER:{
            label:"Power",
            classification:"Wizard"
        }, 
        EXCELENCE:{
            label:"Excelence",
            classification:"Warrior"
        }
    }
},
    CALLING:{label:"Calling",description:"Someone who craves to find liberty and commune with something bigger",
    approaches:{
        PEACE:{
            label:"Peace",
            classification:"Saint"            
        }, 
        COMPREENTION:{
            label:"Compreention",
            classification:"Sage"
        }, 
        FREEDOM:{
            label:"Freedom",
            classification:"Hermit"
        }
    }
},
    ORDER:{label:"Order",description:"Someone who craves to make a better World and build order",
    approaches:{
        INNOVATION:{
            label:"INNOVATION",
            classification:"Inventor"            
        }, 
        AUTHORITY:{
            label:"Authority",
            classification:"Ruler"
        }, 
        DUTY:{
            label:"Duty",
            classification:"Keeper"
        }
    }
},
root:function(character){
    if(!character)character=GAME.main
    var key=character.personality.objective.root;
    return {...OBJECTIVES[key],key:key};
},
approach:function(character){
    if(!character)character=GAME.main
    var root= OBJECTIVES[character.personality.objective.root];
    var key=character.personality.objective.approach;
    return {...root.approaches[key],key:key};
},
}
var BEHAVIOURS={
    energy:function(character){
        if(!character)character=GAME.main
        var key=character.personality.behaviour.energy;
        return {...BEHAVIOURS.ENERGY[key],key:key};
    },
    perspective:function(character){
        if(!character)character=GAME.main
        var key=character.personality.behaviour.perspective;
        return {...BEHAVIOURS.PERSPECTIVE[key],key:key};
    },
    reasoning:function(character){
        if(!character)character=GAME.main
        var key=character.personality.behaviour.reasoning;
        return {...BEHAVIOURS.REASONING[key],key:key};
    },
    approach:function(character){
        if(!character)character=GAME.main
        var key=character.personality.behaviour.approach;
        return {...BEHAVIOURS.APPROACH[key],key:key};
    },
    attitude:function(character){
        if(!character)character=GAME.main
        var key=character.personality.behaviour.attitude;
        return {...BEHAVIOURS.ATTITUDE[key],key:key};
    },
    ENERGY:{
        INTROVERT:{
            label:"Introvert",
            description:"Someone who gathers energy from reclusion and self-focused activities."
        },
        EXTRAVERT:{
            label:"Extravert",
            description:"Someone who gathers energy from social interaction."
        }
    }, 
    PERSPECTIVE:{
        PRATICAL:{
            label:'Pratical',
            description:'Someone that focus on the tangible and doable, here and now and what was learned from the past.'
        },
        IMAGINATIVE:{
            label:'Imaginative',
            description:'Someone that are enticed for possibilities, future and potential.'
        }
    }, 
    REASONING:{
        RATIONAL:{
            label:'Rational',
            description:'Someone logical and reason-driven.'
        },
        EMOTIONAL:{
            label:'Emotional',
            description:'Someone emphatic and emotion-driven.'
        }
    }, 
    APPROACH:{
        IMPROVISED:{
            label:'Improvised',
            description:'Someone accustomed to adapt to the situation.'
        },
        PLANED:{
            label:'Planed',
            description:'Someone who prepare and thinks before act.'
        }
    }, 
    ATTITUDE:{
        DRIVEN:{
            label:'Driven',
            description:'Someone success-driven and eager to improve but sensitive to stress.'
        },
        RELAXED:{
            label:'Relaxed',
            description:'Someone self-assured and resistant to stress but with mild dedication.'
        }
    }
}

//TODO
var EXPRESSION_ARCHETYPES={
    INNOVATION:{
        INNOVATION:{label:"The Anarchist",description:"Someone who captivate with inventiveness."},
        PASSION:{label:"The Show Star",description:"Connect with emotion."},
        POWER:{label:"The Visionary Leader",description:"Lead with assertiveness."},
        PRESTIGE:{label:"The Trendsetter",description:"Set higher standards."},
        TRUST:{label:"The Artisan",description:"Earn respect by stability."},
        CUNNING:{label:"The Provocateur",description:"Communicate meaningfully."},
        KEEN:{label:"The Quick-starter",description:"Prevent with attention"}
    },
    PASSION:{
        INNOVATION:{label:"Innovation",description:"Captivate with inventiveness."},
        PASSION:{label:"Passion",description:"Connect with emotion."},
        POWER:{label:"Power",description:"Lead with assertiveness."},
        PRESTIGE:{label:"Prestige",description:"Set higher standards."},
        TRUST:{label:"Trust",description:"Earn respect by stability."},
        CUNNING:{label:"Cunning",description:"Communicate meaningfully."},
        KEEN:{label:"Keen",description:"Prevent with attention"}
    },
    POWER:{
        INNOVATION:{label:"Innovation",description:"Captivate with inventiveness."},
        PASSION:{label:"Passion",description:"Connect with emotion."},
        POWER:{label:"Power",description:"Lead with assertiveness."},
        PRESTIGE:{label:"Prestige",description:"Set higher standards."},
        TRUST:{label:"Trust",description:"Earn respect by stability."},
        CUNNING:{label:"Cunning",description:"Communicate meaningfully."},
        KEEN:{label:"Keen",description:"Prevent with attention"}
    },
    PRESTIGE:{
        INNOVATION:{label:"Innovation",description:"Captivate with inventiveness."},
        PASSION:{label:"Passion",description:"Connect with emotion."},
        POWER:{label:"Power",description:"Lead with assertiveness."},
        PRESTIGE:{label:"Prestige",description:"Set higher standards."},
        TRUST:{label:"Trust",description:"Earn respect by stability."},
        CUNNING:{label:"Cunning",description:"Communicate meaningfully."},
        KEEN:{label:"Keen",description:"Prevent with attention"}
    },
    TRUST:{
        INNOVATION:{label:"Innovation",description:"Captivate with inventiveness."},
        PASSION:{label:"Passion",description:"Connect with emotion."},
        POWER:{label:"Power",description:"Lead with assertiveness."},
        PRESTIGE:{label:"Prestige",description:"Set higher standards."},
        TRUST:{label:"Trust",description:"Earn respect by stability."},
        CUNNING:{label:"Cunning",description:"Communicate meaningfully."},
        KEEN:{label:"Keen",description:"Prevent with attention"}
    },
    CUNNING:{
        INNOVATION:{label:"Innovation",description:"Captivate with inventiveness."},
        PASSION:{label:"Passion",description:"Connect with emotion."},
        POWER:{label:"Power",description:"Lead with assertiveness."},
        PRESTIGE:{label:"Prestige",description:"Set higher standards."},
        TRUST:{label:"Trust",description:"Earn respect by stability."},
        CUNNING:{label:"Cunning",description:"Communicate meaningfully."},
        KEEN:{label:"Keen",description:"Prevent with attention"}
    },
    KEEN:{
        INNOVATION:{label:"Innovation",description:"Captivate with inventiveness."},
        PASSION:{label:"Passion",description:"Connect with emotion."},
        POWER:{label:"Power",description:"Lead with assertiveness."},
        PRESTIGE:{label:"Prestige",description:"Set higher standards."},
        TRUST:{label:"Trust",description:"Earn respect by stability."},
        CUNNING:{label:"Cunning",description:"Communicate meaningfully."},
        KEEN:{label:"Keen",description:"Prevent with attention"}
    },
};