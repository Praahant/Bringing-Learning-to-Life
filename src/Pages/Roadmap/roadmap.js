import React from 'react';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import Draggable from 'react-draggable';
import { Height } from '@mui/icons-material';
import './roadmap.css';
const boxStyle = {margin: '15px',height:'24px',width:"110px"};

const DraggableBox = ({id}) => {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
           <div id={id} className={[id, 'main'].join(' ')}>
                {id}
            </div>
        </Draggable>
    );
};

function flow() {
  return (
    <div style={{ height: "80vh", display: 'flex', justifyContent: "space-evenly" }}>
      <Xwrapper>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Array'} />
        </span>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Two-Pointers'} />
          <DraggableBox id={'Stack'} />
        </span>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Binary-Search'} />
          <DraggableBox id={'Sliding-Window'} />
          <DraggableBox id={'Linked-List'} />
        </span>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Trees'} />
        </span>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Tries'} />
          <DraggableBox id={'Backtracking'} />
        </span>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Priority-Queue'} />
          <DraggableBox id={'Graph'} />
          <DraggableBox id={'Easy-DP'} />
        </span>
        <span style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
          <DraggableBox id={'Interval'} />
          <DraggableBox id={'Greedy'} />
          <DraggableBox id={'Advanced-Graph'} />
          <DraggableBox id={'2-D-DP'} />
          <DraggableBox id={'Bit-Manupulation'} />
        </span>
       
        <Xarrow start={'Array'} end="Two-Pointers" />
        <Xarrow start={'Array'} end="Stack" />
        <Xarrow start={'Two-Pointers'} end="Binary-Search" />
        <Xarrow start={'Two-Pointers'} end="Sliding-Window" />
        <Xarrow start={'Two-Pointers'} end="Linked-List"/>
        <Xarrow start={'Binary-Search'} end="Trees"/>
        <Xarrow start={'Linked-List'} end="Trees"/>
        <Xarrow start={'Trees'} end="Tries"/>
        <Xarrow start={'Trees'} end="Backtracking"/>
        <Xarrow start={'Trees'} end="Priority-Queue"/>
        <Xarrow start={'Backtracking'} end="Graph"/>
        <Xarrow start={'Backtracking'} end="Easy-DP"/>
        {/* last */}

        <Xarrow start={'Priority-Queue'} end="Interval"/>
        <Xarrow start={'Priority-Queue'} end="Advanced-Graph"/>
        <Xarrow start={'Priority-Queue'} end="Greedy"/>
        <Xarrow start={'Graph'} end="Advanced-Graph"/>
        <Xarrow start={'Graph'} end="2-D-DP"/>
        <Xarrow start={'Easy-DP'} end="2-D-DP"/>
        <Xarrow start={'Easy-DP'} end="Bit-Manupulation"/>
        
      </Xwrapper>
    </div>
  );
}
export default flow;
