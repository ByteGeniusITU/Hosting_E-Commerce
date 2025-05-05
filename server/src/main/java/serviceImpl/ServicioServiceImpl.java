package serviceImpl;

import model.Servicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.ServicioRepository;
import service.ServicioService;

import java.util.List;

@Service
public class ServicioServiceImpl implements ServicioService {
    @Autowired
    private ServicioRepository servicerepo;

    @Override
    public List<Servicio> getServicios() {
        return servicerepo.findAll();
    }
}
