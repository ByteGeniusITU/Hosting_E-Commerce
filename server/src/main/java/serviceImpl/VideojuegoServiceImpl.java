package serviceImpl;

import model.Videojuego;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.VideojuegoRepository;
import service.VideojuegoService;

import java.util.List;

@Service
public class VideojuegoServiceImpl implements VideojuegoService {

    @Autowired
    private VideojuegoRepository vjrepo;

    @Override
    public List<Videojuego> getVjs() {
        return vjrepo.findAll();
    }
}
