// "Crappy PONG" -- step by step
//
// Step 13: Simplify
/*

Supporting timer-events (via setInterval) *and* frame-events (via requestAnimationFrame)
adds significant complexity to the the code.

I can simplify things a little by focusing on the latter case only (which is the
superior mechanism of the two), so let's try doing that...

The "MAINLOOP" code, inside g_main, is much simplified as a result.

*/

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

var background = new Image();
background.src = "space.jpg";




/*
0        1         2         3         4         5         6         7         8         9
123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
*/

// ============
// PADDLE STUFF
// ============

// PADDLE 1

var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);
var KEY_SPACE = 'SPACE'.charCodeAt(0);

var g_paddle1 = new Paddle({
    cx : g_canvas.width / 2,
    cy : g_canvas.height-50,

    GO_LEFT   : KEY_A,
    GO_RIGHT : KEY_D
});


// =================
// UPDATE SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `update` routine handles generic stuff such as
// pausing, single-step, and time-handling.
//
// It then delegates the game-specific logic to `updateSimulation`


// GAME-SPECIFIC UPDATE LOGIC

function updateSimulation(du) {

    g_ball.update(du);

    g_paddle1.update(du);
    for (var i in g_powerups) {
      if(g_powerups[i].check){
        g_powerups[i].update(du);
      }
    }

    for (var i in g_balls) {
      g_balls[i].update(du);

    }

}


// =================
// RENDER SIMULATION
// =================

// We take a very layered approach here...
//
// The primary `render` routine handles generic stuff such as
// the diagnostic toggles (including screen-clearing).
//
// It then delegates the game-specific logic to `gameRender`


// GAME-SPECIFIC RENDERING

function renderSimulation(ctx) {


    g_ball.render(ctx);

    g_paddle1.render(ctx);

    g_wall.render(ctx);
    for (var i in g_powerups) {
      if(g_powerups[i].check){
        g_powerups[i].render(ctx);
      }

    }

    for (var i in g_balls) {
      g_balls[i].render(ctx);

    }


}

// Kick it off
g_main.init();
