import { styled } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, IconButtonProps, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  zIndex: 9999,
}));


export const Footer = () => {
  return (
    <CustomFooter>
      <Accordion square sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='small' color="secondary" />}
        sx={{ backgroundColor: 'primary.main', borderTop: '1px solid white', borderBottom: '1px solid white'}}
        />
        <AccordionDetails sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
          <p>
            <span className="text-emerald-400">ready</span>
            - started server on 0.0.0.0:3000, url: https:www.dooreplay.com/
          </p>
          <p>
            <span className="text-fuchsia-500">event</span>
            - compiled client and server successfully in 347 ms (135 modules)
          </p>
          <p>
            <span className="text-cyan-300">wait</span>
            - compiling / (client and server)...
          </p>
          <p>
            <span className="text-fuchsia-500">event</span>
            - compiled client and server successfully in 172 ms (168 modules)
          </p>
          <p>
            <span className="text-cyan-300">wait</span>
            - compiling...
          </p>
          <p>
            <span className="text-cyan-300">wait</span>
            - compiling...
          </p>
          <p>Run ©2022 dooreplay.com</p>
          <p className="text-cyan-50">Doori + play && Do + replay!</p>
        </AccordionDetails>
      </Accordion>
    </CustomFooter>
  );
}