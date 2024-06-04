using Microsoft.AspNetCore.Mvc;
using Project305.Business.DoctorService;
using Project305.Business.InforConsultService;
using Project305.Domain.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InforConsultController : ControllerBase
    {
        private IInforConsultService _inforConsultService;
        public InforConsultController(IInforConsultService inforConsultService)
        {
            _inforConsultService = inforConsultService;
        }

        [HttpGet]
        [Route("All", Name = "GetAllInforConsult")]
        public async Task<IActionResult> GetAllInforConsult()
        {
            var res = await _inforConsultService.GetAll();
            var doctos = new List<InforConsult>(res.Data);
            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(doctos);
        }

        [HttpGet]
        [Route("IdDoctor", Name = "GetInforConsultByDoctorId")]
        public async Task<IActionResult> GetInforConsultByDoctorId(int Id)
        {
            var res = await _inforConsultService.GetByIdDoctor(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpGet]
        [Route("IdPatient", Name = "GetInforConsultByPatientId")]
        public async Task<IActionResult> GetInforConsultByPatientId(int Id)
        {
            var res = await _inforConsultService.GetByIdPatient(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateInforConsult(InforConsult inforConsult)
        {
            var res = await _inforConsultService.CreateAsync(inforConsult);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpDelete]
        [Route("Delete", Name = "DeleteInforConsult")]
        public async Task<IActionResult> DeleteInforConsult(int Id)
        {
            var res = await _inforConsultService.DeleteAsync(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }
    }
}
