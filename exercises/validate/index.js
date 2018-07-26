// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//called on root node, no min/max set
function validate(node, min = null, max = null) {
    //not set max bound, have max value, but outside current node max value
    //skipped initially, no max/min values
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    //if notde on left and calling validate returns false
    //cause recursion to occur
    //node on left hand side, yes, call recursion with values
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

module.exports = validate;
