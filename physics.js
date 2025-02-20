function getAcceleration(any) {
    if (def(any.f) && def(any.m)) {
        return any.f / any.m;
    } else if (def(any.Δv) && def(any.Δt)) {
        return any.Δv / any.Δt;
    } else if (def(any.d) && def(any.t)) {
        return (2 * any.d) / (any.t ** 2);
    } else {
        return "impossible";
    }
}

function def(value) {
    return value !== undefined && value !== null;
}

const any = {
    f: 10,
  m: 5,
  Δv: 100,
  Δt: 50,
  t:1,
  d: 10
}

console.log(getAcceleration(any));