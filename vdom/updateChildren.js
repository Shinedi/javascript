function updateChildren(vnode, newVnode) {
    var children = vnode.children || [];
    var newChildren = vnode.newChildren || [];
    children.forEach(function(childVnode, index) {
        var newChildVnode = newChildren[index];
        if (newChild[tag] == child[tag]) {
            updateChildren(childVnode, newChildVnode)
        } else {
            replaceNode(childVnode, newChildVnode)
        }
    })
}

function replaceNode (childVnode, newChildVnode) {
    var elem = childVnode.elem; // 真实的Dom节点
    var newElem = createElement(newChildVnode)

    // 替换
}