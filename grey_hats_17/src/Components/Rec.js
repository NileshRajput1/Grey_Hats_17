const map1 = new Map();

map1.set('Saree', 10);
map1.set('Bangal', 20);
map1.set('wood', 30);


function Rec() {
    return (
<>
{console.log(map1.get('wood'))}
</>
    );
}

export default Rec;