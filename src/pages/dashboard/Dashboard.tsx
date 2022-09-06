import { Box } from "@mui/material";
import { LayoutBaseDaPagina } from "../../shared/layout";

export const Dashboard: React.FC = () => {
    return (
        <Box>
            <LayoutBaseDaPagina titulo="Pagina inicial" children={undefined} barraDeFerramentas={<>Barra de Ferramentas</>} />
            Testando
        </Box>
    );
}