import test from "ava"
import objFromArr from "."

test("main", (t) => {
    t.deepEqual(objFromArr(["a", "b", "c"], (val) => {
        // Handle array here. I'm going to use some simple handling logic as an example.
        if (val === "a") return 1
        if (val === "b") return 2
        if (val === "c") return 3
    }), { "a": 1, "b": 2, "c": 3 })
})
