function getAcceleration(obj) {
    if (arguments.length == 1) {
        // if (typeof obj.f !== "undefined" && typeof obj.m !== "undefined" && typeof obj.Δv !== "undefined" ){
        //     let a1 = Δv / obj.f / obj.m
        //     return a1
        // };
        // if (typeof obj.f !== "undefined" && typeof obj.m !== "undefined" ){
        //     let a1 = obj.f / obj.m
        //     return a1
        // };
        // if (typeof obj.Δv !== "undefined" && typeof obj.Δt !== "undefined") {
        //     let a2 = obj.Δv / obj.Δt
        //     return a2
        // };
        if (typeof obj.t !== "undefined" && typeof obj.d !== "undefined") {
            let w = obj.d
            let q = obj.t
            let a3 = Math.pow(w)/q^2
            return a3
        };
        return 'impossible'
    }
    return 'impossible'   
};

// console.log(getAcceleration({ f: 10, m: 5, Δv: 100, Δt: 50, t:1, d: 10 }));
console.log(getAcceleration({d: 10, t: 2, Δv: 100}));