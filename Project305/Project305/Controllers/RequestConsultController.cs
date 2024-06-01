using Microsoft.AspNetCore.Mvc;
using Project305.Business.DoctorService;
using Project305.Business.RequestConsultService;
using Project305.Domain.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestConsultController : ControllerBase
    {
        private IRequestConsultService _requesConsultService;
        public RequestConsultController(IRequestConsultService requesConsultService)
        {
           _requesConsultService = requesConsultService;
        }

        [HttpGet]
        [Route("All", Name = "GetAllRequest")]
        public async Task<IActionResult> GetAllRequest()
        {
            var res = await _requesConsultService.GetAll();
            var doctos = new List<RequestConsult>(res.Data);
            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(doctos);
        }

        [HttpGet]
        [Route("IdDoctor", Name = "GetRequestByDoctorId")]
        public async Task<IActionResult> GetRequestByDoctorId(int Id)
        {
            var res = await _requesConsultService.GetByIdDoctor(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpGet]
        [Route("IdPatient", Name = "GetRequestByPatientId")]
        public async Task<IActionResult> GetRequestByPatientId(int Id)
        {
            var res = await _requesConsultService.GetByIdPatient(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRequestConsult(RequestConsult requestConsult)
        {
            var res = await _requesConsultService.CreateAsync(requestConsult);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpDelete]
        [Route("Delete", Name = "DeleteRequest")]
        public async Task<IActionResult> DeleteRequest(int Id)
        {
            var res = await _requesConsultService.DeleteAsync(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }
    }
}
