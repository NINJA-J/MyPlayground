package org.jonathan.server.games;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Arrays;

@Controller
@RequestMapping("/games/sudoku")
public class SudokuController {

    @RequestMapping("")
    public ModelAndView puzzle() {
        ModelAndView mav = new ModelAndView("sudoku.html");
        mav.addObject("values", Arrays.asList(
                Arrays.asList(0, 0, 0, 0, 0, 0, 0, 0, 0),
                Arrays.asList(0, 0, 6, 8, 0, 4, 7, 0, 0),
                Arrays.asList(0, 9, 0, 0, 0, 0, 0, 1, 0),
                Arrays.asList(0, 4, 0, 0, 9, 0, 0, 5, 0),
                Arrays.asList(0, 0, 0, 6, 0, 1, 0, 0, 0),
                Arrays.asList(0, 3, 0, 0, 5, 0, 0, 7, 0),
                Arrays.asList(0, 5, 0, 0, 0, 0, 0, 3, 0),
                Arrays.asList(0, 0, 8, 4, 0, 0, 6, 2, 0),
                Arrays.asList(0, 0, 0, 0, 0, 0, 0, 0, 0)));
        return mav;
    }
}
