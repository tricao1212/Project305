using Microsoft.AspNetCore.Mvc;
using Project305.Business.DoctorService;
using Project305.Domain.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private IDoctorService _doctorService;
        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        [HttpGet]
        [Route("All", Name = "GetAllDoctors")]
        public async Task<IActionResult> GetAllDoctors()
        {
            var res = await _doctorService.GetAll();
            var doctos = new List<Doctor>(res.Data);
            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(doctos);
        }

        [HttpGet]
        [Route("Id", Name = "GetDoctorById")]
        public async Task<IActionResult> GetDoctorById(int Id)
        {
            var res = await _doctorService.GetById(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDoctor(Doctor doctor)
        {
            var res = await _doctorService.CreateAsync(doctor);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpDelete]
        [Route("Delete", Name = "DeleteDoctor")]
        public async Task<IActionResult> DeleteDoctor(int Id)
        {
            var res = await _doctorService.DeleteAsync(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }
    }
}
