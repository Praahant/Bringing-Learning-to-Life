import React from 'react';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import Draggable from 'react-draggable';
import { Height } from '@mui/icons-material';
import './roadmap.css';
import { NavLink } from 'react-router-dom';
// import FullScreenDialog from '../../Dialogbox';
const boxStyle = {margin: '15px',height:'24px',width:"110px"};

const DraggableBox = ({id}) => {
    const updateXarrow = useXarrow();
    return (
        // <Draggable onDrag={updateXarrow}  onStop={updateXarrow}>
             <NavLink to={id}><div onClick={(event) => {
            const tempfunc=event.target.id;
            // alert(tempfunc);
            // tempfunc();

             }} id={id} className={[id, 'main'].join(' ')}>
                {id}
            </div>
            </NavLink>
      //  </Draggable>
    );
};

function Flow() {
  return (
    <div className='flowContainer' >
      <Xwrapper>
        <span className='flowinside'>
          <DraggableBox id={'Array'}/>
        </span>
        <span className='flowinside'>
          <DraggableBox id={'Two-Pointers'} />
          <DraggableBox id={'Stack'} />
        </span>
        <span className='flowinside'>
          <DraggableBox id={'Binary-Search'} />
          <DraggableBox id={'Sliding-Window'} />
          <DraggableBox id={'Linked-List'} />
        </span>
        <span className='flowinside'>
          <DraggableBox id={'Trees'} />
        </span>
        <span className='flowinside'>
          <DraggableBox id={'Tries'} />
          <DraggableBox id={'Backtracking'} />
        </span>
        <span className='flowinside'>
          <DraggableBox id={'Priority-Queue'} />
          <DraggableBox id={'Graph'} />
          <DraggableBox id={'Easy-DP'} />
        </span>
        <span className='flowinside'>
          <DraggableBox id={'Interval'} />
          <DraggableBox id={'Greedy'} />
          <DraggableBox id={'Advanced-Graph'} />
          <DraggableBox id={'2-D-DP'} />
          <DraggableBox id={'Bit-Manupulation'} />
        </span>
       
        <Xarrow start={'Array'} end="Two-Pointers"  curveness={0.7} color='white' />
        <Xarrow start={'Array'} end="Stack"  curveness={0.7} color='white'/>
        <Xarrow start={'Two-Pointers'} end="Binary-Search"  curveness={0.7} color='white'/>
        <Xarrow start={'Two-Pointers'} end="Sliding-Window"  curveness={0.7} color='white'/>
        <Xarrow start={'Two-Pointers'} end="Linked-List" curveness={0.7} color='white'/>
        <Xarrow start={'Binary-Search'} end="Trees"  curveness={0.7} color='white'/>
        <Xarrow start={'Linked-List'} end="Trees"  curveness={0.7} color='white'/>
        <Xarrow start={'Trees'} end="Tries"  curveness={0.7} color='white'/>
        <Xarrow start={'Trees'} end="Backtracking"  curveness={0.7} color='white'/>
        <Xarrow start={'Trees'} end="Priority-Queue"  curveness={0.7} color='white'/>
        <Xarrow start={'Backtracking'} end="Graph"  curveness={0.7} color='white'/>
        <Xarrow start={'Backtracking'} end="Easy-DP"  curveness={0.7} color='white'/>
        {/* last */}

        <Xarrow start={'Priority-Queue'} end="Interval"  curveness={0.7} color='white'/>
        <Xarrow start={'Priority-Queue'} end="Advanced-Graph"  curveness={0.7} color='white'/>
        <Xarrow start={'Priority-Queue'} end="Greedy"  curveness={0.7} color='white'/>
        <Xarrow start={'Graph'} end="Advanced-Graph"  curveness={0.7} color='white'/>
        <Xarrow start={'Graph'} end="2-D-DP"  curveness={0.7} color='white'/>
        <Xarrow start={'Easy-DP'} end="2-D-DP"  curveness={0.7} color='white'/>
        <Xarrow start={'Easy-DP'} end="Bit-Manupulation"  curveness={0.7} color='white'/>
        
      </Xwrapper>
      
    </div>
  );
}
export default Flow;
