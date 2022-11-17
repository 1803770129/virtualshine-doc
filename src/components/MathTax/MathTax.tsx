import TeX from '@matejmazur/react-katex';
const MathTax = ({ math }:{math:any}) => {
    return (
        <TeX math={math}>
        </TeX>
    )
  }
  export default MathTax