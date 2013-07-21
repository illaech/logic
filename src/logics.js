// Generated by CoffeeScript 1.6.3
var DEBUG, NULL, Node, OFF, ONE, Z, clear, dark, draw_text;

DEBUG = true;

/*
Состояния:
    * 0 (логический 0),
    * 1 (логическая 1),
    * -1 (Z-состояние),
    * -2 (питания нет).
*/


NULL = {
  value: 0,
  text: "0",
  color: "#15bbf5"
};

ONE = {
  value: 1,
  text: "1",
  color: "#f5bb15"
};

Z = {
  value: -1,
  text: "Z",
  color: "#f515bb"
};

OFF = {
  value: -2,
  text: "",
  color: "#000"
};

({
  state_from_value: function(value) {
    switch (value) {
      case -2:
        return OFF;
      case -1:
        return Z;
      case 0:
        return NULL;
      case 1:
        return ONE;
      default:
        return void 0;
    }
  },
  invert: function(state) {
    switch (state) {
      case NULL:
        return ONE;
      case ONE:
        return NULL;
      default:
        return state;
    }
  }
});

Node = (function() {
  function Node() {
    this._element = false;
    this._inverted = false;
    this._connected = false;
    this._state = OFF;
    this._wires = [];
    this._coordinates = {};
    this._radius = 4;
  }

  Node.prototype.add_wire = function(wire) {
    return this._wires.push(wire);
  };

  Node.prototype.get_wires = function() {
    return this._wires;
  };

  Node.prototype.connect = function() {
    return this._connected = true;
  };

  Node.prototype.is_connected = function() {
    return this._connected;
  };

  Node.prototype.is_inverted = function() {
    return this._inverted;
  };

  Node.prototype.set_coordinates = function(point) {
    return this._coordinates = point;
  };

  Node.prototype.get_coordinates = function() {
    return this._coordinates;
  };

  Node.prototype.set_state = function(state) {
    return this._state = state;
  };

  Node.prototype.get_state = function() {
    return this._state;
  };

  Node.prototype.draw = function(ctx) {
    if (this._inverted) {
      ctx.strokeStyle = OFF.color;
    } else {
      ctx.strokeStyle = dark(this._state.color);
    }
    ctx.fillStyle = this._state.color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this._coordinates.x, this._coordinates.y, this._radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    return ctx.stroke();
  };

  return Node;

})();

dark = function(color) {
  switch (color) {
    case "#f5bb15":
      return "#b38400";
    case "#15bbf5":
      return "#0084b3";
    case "#f515bb":
      return "#b30084";
    default:
      return "#000";
  }
};

draw_text = function(x, y, text) {
  ctx.fillStyle = "#000";
  ctx.textAlign = 'left';
  return ctx.fillText(text, x, y);
};

clear = function(ctx) {
  return ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
